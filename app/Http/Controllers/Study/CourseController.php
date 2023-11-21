<?php

namespace App\Http\Controllers\Study;

use App\Http\Controllers\Controller;
use App\Models\Course;
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
        $courses = Course::paginate($request->get('s', 8));

        return $request->wantsJson()
            ? view('study.courses.lazy')->with([
                'courses' => $courses,
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
                'courses' => $courses,
                'course_page' => true,
            ]);
    }
}
