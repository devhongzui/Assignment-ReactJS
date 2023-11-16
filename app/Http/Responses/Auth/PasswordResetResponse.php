<?php

namespace App\Http\Responses\Auth;

use App\Providers\RouteServiceProvider;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PasswordResetResponse extends \Laravel\Fortify\Http\Responses\PasswordResetResponse
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
            'redirect' => auth()->check()
                ? url(RouteServiceProvider::HOME)
                : route('login'),
            'message' => __($this->status),
        ]);
    }
}
