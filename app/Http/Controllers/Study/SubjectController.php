<?php

namespace App\Http\Controllers\Study;

use App\Http\Controllers\Controller;
use App\Models\Lesson;
use App\Models\Subject;
use Illuminate\Http\Request;
use Illuminate\View\View;

class SubjectController extends Controller
{
    /**
     * @param int $subject_id
     * @param Request $request
     * @return View
     */
    public function lessons(int $subject_id, Request $request): View
    {
        $page_size = $request->get('s', 8);
        $query = $request->query();

        if ($request->wantsJson()) {
            $lessons = Lesson
                ::whereSubjectId($subject_id)
                ->paginate($page_size)
                ->appends($query);

            return view('study.course.lazy')->with([
                'data' => $lessons,
                'route' => 'lesson',
                'is_lazy' => true,
            ]);
        } else {
            $subject = Subject::find($subject_id);
            $image = $subject->getThumbnail('high')->url ?? asset('logo.png');
            $lessons = $subject
                ->lessons()
                ->paginate($page_size)
                ->appends($query);

            return view('study.subject')->with([
                'web_title' => $subject->title,
                'web_description' => $subject->description,
                'web_image' => $image,
                'subject' => $subject,
                'data' => $lessons,
                'route' => 'lesson',
                'course_page' => true,
            ]);
        }
    }
}
