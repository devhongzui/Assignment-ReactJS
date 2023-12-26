<?php

namespace App\Http\Controllers\Api\Study;

use App\Http\Controllers\Controller;
use App\Models\Lesson;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

class LessonController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $lesson = Lesson::with([
            'thumbnails',
            'channel',
            'subject',
        ]);
        $limit = $request->get('limit', 8);

        return $request->exists('subject_id')
            ? $lesson->whereSubjectId($request->subject_id)->paginate($limit)
            : $lesson->inRandomOrder('id')->paginate($limit)->onEachSide(1);
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param int $id
     * @return Lesson|Collection
     */
    public function show(Request $request, int $id)
    {
        $lesson = Lesson::with([
            'thumbnails',
            'channel',
            'subject',
        ])
            ->find($id);

        if ($request->exists('next_lesson')) {
            $lessonsBefore = Lesson::whereSubjectId($lesson->subject_id)
                ->with(['thumbnails'])
                ->where('id', '<', $id)
                ->orderBy('id', 'desc')
                ->take(5)
                ->get();

            $lessonsAfter = Lesson::whereSubjectId($lesson->subject_id)
                ->with(['thumbnails'])
                ->where('id', '>', $id)
                ->orderBy('id')
                ->take(5)
                ->get();

            return $lessonsBefore->merge([$lesson])->merge($lessonsAfter);
        } else return $lesson;
    }
}
