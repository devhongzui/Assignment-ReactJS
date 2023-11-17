<?php

namespace App\Http\Responses\Auth;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PasswordConfirmedResponse extends \Laravel\Fortify\Http\Responses\PasswordConfirmedResponse
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
            'redirect' => $request->get('redirect'),
            'message' => __('Password confirmation successful!'),
        ]);
    }
}
