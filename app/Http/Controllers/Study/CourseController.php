<?php

namespace App\Http\Controllers\Study;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\Subject;
use Illuminate\Http\Request;
use Illuminate\View\View;

class CourseController extends Controller
{
    /**
     * @param Request $request
     * @return View
     */
    public function show(Request $request): View
    {
        $courses = Course
            ::paginate($request->get('s', 8))
            ->appends($request->query());

        return $request->wantsJson()
            ? view('study.courses.lazy')->with([
                'data' => $courses,
                'is_lazy' => true,
            ])
            : view('study.courses')->with([
                'web_title' => __('Summary of programming courses'),
                'web_description' => implode(' ', [
                    __('Welcome to the top programming course aggregator!'),
                    __('We offer a variety of programming courses, from basic to advanced, to help you improve your programming skills.'),
                    __('With courses in Python, Java, JavaScript, and many other languages, you have the opportunity to learn syntax, programming logic, and practice through real-life projects.'),
                    __('Experienced teaching staff ensure your learning brings real value. Explore new opportunities with us today!'),
                ]),
                'web_image' => asset('storage/images/undraw/Learning.png'),
                'data' => $courses,
                'route' => 'course',
                'course_page' => true,
            ]);
    }

    /**
     * @param int $course_id
     * @param Request $request
     * @return View
     */
    public function subjects(int $course_id, Request $request): View
    {
        $page_size = $request->get('s', 8);
        $query = $request->query();

        if ($request->wantsJson()) {
            $subjects = Subject
                ::whereCourseId($course_id)
                ->paginate($page_size)
                ->appends($query);

            return view('study.course.lazy')->with([
                'data' => $subjects,
                'route' => 'subject',
                'is_lazy' => true,
            ]);
        } else {
            $course = Course::find($course_id);
            $subjects = $course
                ->subjects()
                ->paginate($page_size)
                ->appends($query);

            return view('study.course')->with([
                'web_title' => $course->title,
                'web_description' => $course->description,
                'web_image' => $course->image,
                'course' => $course,
                'data' => $subjects,
                'route' => 'subject',
                'course_page' => true,
            ]);
        }
    }
}
