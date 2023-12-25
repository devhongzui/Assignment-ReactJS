<?php

namespace App\Http\Controllers\Api\Study;

use App\Http\Controllers\Controller;
use App\Models\Channel;

class ChannelController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return Channel
     */
    public function show(int $id): Channel
    {
        return Channel::with(Channel::relationships())
            ->find($id);
    }
}
