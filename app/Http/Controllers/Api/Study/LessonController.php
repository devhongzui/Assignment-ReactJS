<?php

namespace App\Http\Controllers\Api\Study;

use App\Http\Controllers\Controller;
use App\Models\Lesson;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Http\Request;

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
     * @param int $id
     * @return Lesson
     */
    public function show(int $id): Lesson
    {
        return Lesson::with([
            'thumbnails',
            'channel' => fn(BelongsTo $query) => $query->with('thumbnails'),
        ])
            ->find($id);
    }
}
