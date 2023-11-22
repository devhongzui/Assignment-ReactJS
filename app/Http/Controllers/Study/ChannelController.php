<?php

namespace App\Http\Controllers\Study;

use App\Http\Controllers\Controller;
use App\Models\Channel;
use App\Models\Lesson;
use App\Models\Subject;
use Illuminate\Http\Request;
use Illuminate\View\View;

class ChannelController extends Controller
{
    /**
     * @param int $channel_id
     * @param Request $request
     * @return View
     */
    public function detail(int $channel_id, Request $request): View
    {
        $page_size = $request->get('s', 8);
        $query = $request->query();

        if ($request->wantsJson()) {
            $is_lesson = $request->get('data') === 'lessons';
            $data = $is_lesson
                ? Lesson::whereChannelId($channel_id)->paginate($page_size)->appends($query)
                : Subject::whereChannelId($channel_id)->paginate($page_size)->appends($query);
            $route = $is_lesson ? 'lesson' : 'subject';

            return view('study.course.lazy')->with([
                'data' => $data,
                'route' => $route,
                'is_lazy' => true,
            ]);
        } else {
            $channel = Channel::find($channel_id);
            $image = $channel->getThumbnail('high')->url ?? asset('logo.png');
            $lessons = $channel
                ->lessons()
                ->paginate($page_size)
                ->appends(array_merge($query, ['data' => 'lessons']));
            $subjects = $channel
                ->subjects()
                ->paginate($page_size)
                ->appends(array_merge($query, ['data' => 'subjects']));
            $list = (object)[
                (object)[
                    'title' => __('Lessons from :name', ['name' => $channel->title]),
                    'data' => $lessons,
                    'route' => 'lesson',
                ],
                (object)[
                    'title' => __('Subjects from :name', ['name' => $channel->title]),
                    'data' => $subjects,
                    'route' => 'subject',
                ],
            ];

            return view('study.channel')->with([
                'web_title' => $channel->title,
                'web_description' => $channel->description,
                'web_image' => $image,
                'channel' => $channel,
                'list' => $list,
                'course_page' => true,
            ]);
        }
    }
}
