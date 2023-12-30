<?php

namespace App\Http\Controllers\Api\Study;

use App\Http\Controllers\Controller;
use App\Models\Study\Channel;
use App\Models\Study\Lesson;
use App\Models\Study\Subject;
use Illuminate\Http\Request;

class ChannelController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param int $id
     * @return Channel|Lesson[]|Subject[]
     */
    public function show(Request $request, int $id)
    {
        $channel = Channel::with(['thumbnails'])->find($id);
        $limit = $request->get('limit', 8);

        return match ($request->relationship) {
            'lesson' => $channel->lessons()->paginate($limit),
            'subject' => $channel->subjects()->paginate($limit),
            default => $channel,
        };
    }
}
