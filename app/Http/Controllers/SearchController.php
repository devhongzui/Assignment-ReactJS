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
        if ($request->wantsJson()) {
            $data = $request->get('data');
            switch ($data) {
                case 'channels':
                    $items = Channel::search($query)->paginate(4)->appends('data', $data);
                    break;
                case 'courses':
                    $items = Course::search($query)->paginate(4)->appends('data', $data);
                    break;
                case 'lessons':
                    $items = Lesson::search($query)->paginate(4)->appends('data', $data);
                    break;
                case 'subjects':
                    $items = Subject::search($query)->paginate(4)->appends('data', $data);
                    break;
                case 'tools':
                    $items = Tool::search($query)->paginate(4)->appends('data', $data);
                    break;
                default:
                    abort(404);
            }

            return view("pages.search.$data")->with([
                $data => $items,
                'is_lazy' => true,
            ]);
        } else {
            $channels = Channel::search($query)->paginate(4)->appends('data', 'channels');
            $courses = Course::search($query)->paginate(4)->appends('data', 'courses');
            $lessons = Lesson::search($query)->paginate(4)->appends('data', 'lessons');
            $subjects = Subject::search($query)->paginate(4)->appends('data', 'subjects');
            $tools = Tool::search($query)->paginate(4)->appends('data', 'tools');

            return view('pages.search', [
                'web_title' => __('Results for :query', ['query' => $query]),
                'channels' => $channels,
                'courses' => $courses,
                'lessons' => $lessons,
                'subjects' => $subjects,
                'tools' => $tools,
            ]);
        }
    }
}
