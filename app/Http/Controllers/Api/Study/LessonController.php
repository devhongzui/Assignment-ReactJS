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
        return $request->exists('subject_id')
            ? Lesson::whereSubjectId($request->subject_id)
                ->with(Lesson::relationships())
                ->paginate(8)
                ->appends($request->query())
            : Lesson::inRandomOrder('id')
                ->with(Lesson::relationships())
                ->paginate($request->get('limit', 8))
                ->onEachSide(1);
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
        if ($request->exists('next_lesson')) {
            $lessonMiddle = app(Lesson::class)
                ->with(Lesson::relationships())
                ->find($id);

            $lessonsBefore = Lesson::whereSubjectId($lessonMiddle->subject_id)
                ->with(Lesson::relationships())
                ->where('id', '<', $id)
                ->orderBy('id', 'desc')
                ->take(5)
                ->get();

            $lessonsAfter = Lesson::whereSubjectId($lessonMiddle->subject_id)
                ->with(Lesson::relationships())
                ->where('id', '>', $id)
                ->orderBy('id')
                ->take(5)
                ->get();

            return $lessonsBefore->merge([$lessonMiddle])->merge($lessonsAfter);
        } else return app(Lesson::class)
            ->with(Lesson::relationships())
            ->find($id);
    }
}
