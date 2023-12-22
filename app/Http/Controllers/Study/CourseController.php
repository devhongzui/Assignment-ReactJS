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
     * @param int $course_id
     * @param Request $request
     * @return View
     */
    public function subjects(int $course_id, Request $request): View
    {
        $query = $request->query();

        if ($request->wantsJson()) {
            $subjects = Subject
                ::whereCourseId($course_id)
                ->paginate(8)
                ->appends($query);

            return view('layouts.app')->with([
                'data' => $subjects,
                'route' => 'subject',
                'is_lazy' => true,
            ]);
        } else {
            $course = Course::find($course_id);
            $subjects = $course
                ->subjects()
                ->inRandomOrder('id')
                ->paginate(8)
                ->onEachSide(1)
                ->appends($query);

            return view('layouts.app')->with([
                'web_title' => $course->title,
                'web_description' => $course->description,
                'web_image' => asset($course->image),
                'course' => $course,
                'data' => $subjects,
                'route' => 'subject',
                'course_page' => true,
            ]);
        }
    }
}
