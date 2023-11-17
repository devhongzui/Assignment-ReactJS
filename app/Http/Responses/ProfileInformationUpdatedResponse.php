<?php

namespace App\Http\Responses;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProfileInformationUpdatedResponse extends \Laravel\Fortify\Http\Responses\ProfileInformationUpdatedResponse
{
    /**
     * Create an HTTP response that represents the object.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function toResponse($request): JsonResponse
    {
        return response()->json([
            'reload' => true,
            'message' => __('Profile updated successfully!')
        ]);
    }
}
