<?php

namespace App\Http\Controllers;

use Aerni\Spotify\Exceptions\SpotifyApiException;
use Aerni\Spotify\Exceptions\ValidatorException;
use App\Models\Channel;
use App\Models\Course;
use App\Models\Lesson;
use App\Models\Subject;
use App\Models\Tool;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Spotify;

class SearchController extends Controller
{
    /**
     * @param string $query
     * @param Request $request
     * @return View
     * @throws SpotifyApiException
     * @throws ValidatorException
     */
    public function show(string $query, Request $request): View
    {
        $data_query = $request->get('data');

        return $data_query
            ? $this->getOthersPage($data_query, $query)
            : $this->getFirstPage($request->get('type'), $query);
    }

    /**
     * @param string $data_query
     * @param string $query
     * @return View
     */
    protected function getOthersPage(string $data_query, string $query): View
    {
        switch ($data_query) {
            case 'channel':
                $items = Channel::search($query);
                $view = 'study.channel.lazy';
                break;
            case 'course':
                $items = Course::search($query);
                $view = 'study.courses.lazy';
                break;
            case 'lesson':
                $items = Lesson::search($query);
                $view = 'study.course.lazy';
                break;
            case 'subject':
                $items = Subject::search($query);
                $view = 'study.course.lazy';
                break;
            case 'tool':
                $items = Tool::search($query);
                $view = 'study.courses.lazy';
                break;
            default:
                abort(404);
        }

        return view($view)->with([
            'data' => $items->paginate(4)->appends('data', $data_query),
            'route' => $data_query,
            'is_lazy' => true,
        ]);
    }

    /**
     * @param string|null $type_query
     * @param string $query
     * @return View
     * @throws SpotifyApiException
     * @throws ValidatorException
     */
    protected function getFirstPage(?string $type_query, string $query): View
    {
        switch ($type_query) {
            case 'study':
                $channels = Channel::search($query)->paginate(4)->appends('data', 'channel');
                $courses = Course::search($query)->paginate(4)->appends('data', 'course');
                $lessons = Lesson::search($query)->paginate(4)->appends('data', 'lesson');
                $subjects = Subject::search($query)->paginate(4)->appends('data', 'subject');

                $items = [
                    'channels' => $channels,
                    'courses' => $courses,
                    'lessons' => $lessons,
                    'subjects' => $subjects,
                ];
                break;
            case 'tools':
                $tools = Tool::search($query)->paginate(4)->appends('data', 'tools');

                $items = ['tools' => $tools];
                break;
            case 'musics':
                $musics = Spotify::searchItems($query, 'album, artist, playlist, track')->limit(50)->get();

                $items = [
                    'playlists' => $musics['playlists']['items'],
                    'albums' => $musics['albums']['items'],
                    'artists' => $musics['artists']['items'],
                    'tracks' => $musics['tracks']['items'],
                ];
                break;
            default:
                abort(404);
        }

        return view("pages.search-result.$type_query")->with(array_merge($items, ['is_lazy' => true]));
    }
}
