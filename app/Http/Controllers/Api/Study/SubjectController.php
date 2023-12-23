<?php

namespace App\Http\Controllers\Api\Study;

use App\Http\Controllers\Controller;
use App\Models\Subject;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Http\Request;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return $request->exists('course_id')
            ? Subject::whereCourseId($request->course_id)
                ->with([
                    'thumbnails',
                    'channel' => fn(BelongsTo $query) => $query->with('thumbnails'),
                ])
                ->paginate(8)
                ->appends($request->query())
            : Subject::inRandomOrder('id')
                ->paginate($request->get('limit', 8))
                ->onEachSide(1);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return Subject
     */
    public function show(int $id): Subject
    {
        return Subject::with([
            'thumbnails',
            'channel' => fn(BelongsTo $query) => $query->with('thumbnails'),
        ])
            ->find($id);
    }
}
