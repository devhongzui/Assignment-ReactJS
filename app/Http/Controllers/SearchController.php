<?php

namespace App\Http\Controllers;

use App\Models\Channel;
use App\Models\Course;
use App\Models\Lesson;
use App\Models\Subject;
use App\Models\Tool;
use Illuminate\Http\Request;
use Illuminate\View\View;

class SearchController extends Controller
{
    /**
     * @param string $query
     * @param Request $request
     * @return View
     */
    public function show(string $query, Request $request): View
    {
        $page_size = $request->get('s', 8);

        if ($request->wantsJson()) {
            $type = $request->get('type');

            switch ($type) {
                case 'channel':
                    $view = 'study.courses.lazy';
                    $item = Channel::search($query)->paginate($page_size);
                    break;
                case 'course':
                    $view = 'study.courses.lazy';
                    $item = Course::search($query)->paginate($page_size);
                    break;
                case 'lesson':
                    $view = 'study.course.lazy';
                    $item = Lesson::search($query)->paginate($page_size);
                    break;
                case 'subject':
                    $view = 'study.course.lazy';
                    $item = Subject::search($query)->paginate($page_size);
                    break;
                case 'tool':
                    $view = 'study.courses.lazy';
                    $item = Tool::search($query)->paginate($page_size);
                    break;
                default:
                    abort(404);
            }

            return view($view)->with(
                array_merge([
                    'data' => $item,
                    'route' => $type,
                    'is_ajax' => true,
                ])
            );
        } else {
            $channels = Channel::search($query)->paginate($page_size);
            $courses = Course::search($query)->paginate($page_size);
            $lessons = Lesson::search($query)->paginate($page_size);
            $subjects = Subject::search($query)->paginate($page_size);
            $tools = Tool::search($query)->paginate($page_size);

            return view('pages.search', [
                'channels' => $channels,
                'courses' => $courses,
                'lessons' => $lessons,
                'subjects' => $subjects,
                'tools' => $tools,
            ]);
        }
    }

//    /**
//     * @param SearchRequest $request
//     * @return JsonResponse
//     */
//    public function search(SearchRequest $request): JsonResponse
//    {
//        $validated = $request->validated();
//
//        return response()->json([
//            'redirect' => route('search.show', [
//                'query' => $validated['query']
//            ])
//        ]);
//    }
}
