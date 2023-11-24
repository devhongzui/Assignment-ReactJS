<?php

namespace App\Http\Controllers\Study;

use App\Http\Controllers\Controller;
use App\Models\Lesson;
use Illuminate\Http\Request;
use Illuminate\View\View;

class LessonController extends Controller
{
    /**
     * @return View
     */
    public function show(): View
    {
        $lessons = Lesson::inRandomOrder('id')
            ->paginate(8)
            ->onEachSide(1);

        return view('study.course.lazy')->with([
            'data' => $lessons,
            'route' => 'lesson',
            'is_lazy' => true,
        ]);
    }

    /**
     * @param int $lesson_id
     * @return View
     */
    public function detail(int $lesson_id): View
    {
        $lesson = Lesson::find($lesson_id);
        $image = $lesson->getThumbnail('high')->url ?? asset('logo.png');
        $prev_lessons = Lesson
            ::where('id', '<', $lesson->id)
            ->where('id', '>', $lesson->id - 6)
            ->get();
        $next_lessons = Lesson
            ::where('id', '>', $lesson->id)
            ->where('id', '<', $lesson->id + 11)
            ->get();
        $subject = $lesson->subject;
        $channel = $lesson->channel;

        return view('study.lesson')->with([
            'web_title' => $lesson->title,
            'web_description' => $lesson->description,
            'web_image' => $image,
            'prev_lessons' => $prev_lessons,
            'lesson' => $lesson,
            'next_lessons' => $next_lessons,
            'subject' => $subject,
            'channel' => $channel,
            'course_page' => true,
        ]);
    }
}
