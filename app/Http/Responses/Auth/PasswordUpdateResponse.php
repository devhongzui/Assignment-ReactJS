<?php

namespace App\Http\Responses\Auth;

use App\Providers\RouteServiceProvider;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PasswordUpdateResponse extends \Laravel\Fortify\Http\Responses\PasswordUpdateResponse
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
            'redirect' => url(RouteServiceProvider::HOME),
            'message' => __('Password changed successfully!')
        ]);
    }
}
