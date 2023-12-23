<?php

namespace App\Http\Controllers\Api\Study;

use App\Http\Controllers\Controller;
use App\Models\Subject;
use App\Models\Thumbnail;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Http\Request;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return $request->exists('course_id')
            ? Subject
                ::whereCourseId($request->course_id)
                ->with([
                    'thumbnails' =>
                        fn(HasMany $builder) => $builder->where('type', '=', Thumbnail::getTypeCode('maxres'))
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
        return Subject::find($id);
    }
}
