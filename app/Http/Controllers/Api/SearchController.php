<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Study\Channel;
use App\Models\Study\Course;
use App\Models\Study\Lesson;
use App\Models\Study\Subject;
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
        $query = $request->get('query');
        $limit = $request->get('limit', 4);

        switch ($request->type) {
            case 'lesson':
                return Lesson::search($query)
                    ->query(fn(Builder $builder): Builder => $builder->with([
                        'thumbnails',
                        'channel',
                        'subject',
                    ]))
                    ->paginate($limit);
            case 'subject':
                return Subject::search($query)
                    ->query(fn(Builder $builder): Builder => $builder->with([
                        'thumbnails',
                        'course',
                        'channel',
                    ]))
                    ->paginate($limit);
            case 'channel':
                return Channel::search($query)
                    ->query(fn(Builder $builder): Builder => $builder->with('thumbnails'))
                    ->paginate($limit);
            case 'course':
                return Course::search($query)->paginate($limit);
            default:
                abort(404);
        }
    }
}
