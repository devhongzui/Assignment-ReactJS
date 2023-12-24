<?php

namespace App\Http\Controllers\Api\Study;

use App\Http\Controllers\Controller;
use App\Models\Lesson;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
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
                ->with([
                    'thumbnails',
                    'channel' => fn(BelongsTo $query) => $query->with('thumbnails'),
                ])
                ->paginate(8)
                ->appends($request->query())
            : Lesson::inRandomOrder('id')
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
            $lessonMiddle = Lesson::with('thumbnails')
                ->find($id);

            if ($lessonMiddle) {
                $lessonsBefore = Lesson::with('thumbnails')
                    ->whereSubjectId($lessonMiddle->subject_id)
                    ->where('id', '<', $id)
                    ->orderBy('id', 'desc')
                    ->take(5)
                    ->get();

                $lessonsAfter = Lesson::with('thumbnails')
                    ->whereSubjectId($lessonMiddle->subject_id)
                    ->where('id', '>', $id)
                    ->orderBy('id')
                    ->take(5)
                    ->get();

                return $lessonsBefore->merge([$lessonMiddle])->merge($lessonsAfter);
            } else return $lessonMiddle;
        } else return Lesson::with([
            'thumbnails',
            'channel' => fn(BelongsTo $query) => $query->with('thumbnails'),
            'subject' => fn(BelongsTo $query) => $query->with('thumbnails'),
        ])
            ->find($id);
    }
}
