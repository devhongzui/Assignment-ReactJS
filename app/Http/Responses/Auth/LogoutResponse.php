<?php

namespace App\Http\Responses\Auth;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LogoutResponse extends \Laravel\Fortify\Http\Responses\LogoutResponse
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
            'message' => __('Signed out successfully!')
        ]);
    }
}
