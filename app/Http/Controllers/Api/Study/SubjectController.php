<?php

namespace App\Http\Controllers\Api\Study;

use App\Http\Controllers\Controller;
use App\Models\Study\Subject;
use Illuminate\Http\Request;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $subject = Subject::with([
            'thumbnails',
            'course',
            'channel',
        ]);
        $limit = $request->get('limit', 8);

        return $request->exists('course_id')
            ? $subject->whereCourseId($request->course_id)->paginate($limit)
            : $subject->inRandomOrder('id')->paginate($limit)->onEachSide(1);
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
            'course',
            'channel',
        ])
            ->find($id);
    }
}
