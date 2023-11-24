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
     * @param Request $request
     * @return View
     */
    public function show(Request $request): View
    {
        $channels = Channel
            ::paginate($request->get('s', 8))
            ->appends($request->query());

        return view('study.channel.lazy')->with([
            'data' => $channels,
            'route' => 'channel',
            'is_lazy' => true,
        ]);
    }

    /**
     * @param int $channel_id
     * @param Request $request
     * @return View
     */
    public function detail(int $channel_id, Request $request): View
    {
        if ($request->wantsJson()) {
            switch ($request->get('data')) {
                case 'lessons':
                    $data = Lesson::whereChannelId($channel_id)->paginate(8);
                    $route = 'lesson';
                    break;
                case 'subjects':
                    $data = Subject::whereChannelId($channel_id)->paginate(8);
                    $route = 'subject';
                    break;
                default:
                    abort(404);
            }

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
                ->paginate(8)
                ->appends('data', 'lessons');
            $subjects = $channel
                ->subjects()
                ->paginate(8)
                ->appends('data', 'subjects');

            return view('study.channel')->with([
                'web_title' => $channel->title,
                'web_description' => $channel->description,
                'web_image' => $image,
                'channel' => $channel,
                'lessons' => $lessons,
                'subjects' => $subjects,
                'course_page' => true,
            ]);
        }
    }
}
