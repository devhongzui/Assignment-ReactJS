<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\Lesson;
use App\Models\Subject;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @return LengthAwarePaginator|void
     */
    public function __invoke(Request $request)
    {
        if (!$request->exists('query'))
            abort(403);

        $query = $request->get('query');
        $limit = $request->get('limit', 4);

        switch ($request->type) {
            case 'course':
                return Course::search($query)
                    ->query(fn(Builder $query) => $query->with(Course::relationships()))
                    ->paginate($limit);
            case 'subject':
                return Subject::search($query)
                    ->query(fn(Builder $query) => $query->with(Subject::relationships()))
                    ->paginate($limit);
            case 'lesson':
                return Lesson::search($query)
                    ->query(fn(Builder $query) => $query->with(Lesson::relationships()))
                    ->paginate($limit);
            default:
                abort(405);
        }
    }
}
