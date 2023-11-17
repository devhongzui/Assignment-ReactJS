<?php

namespace App\Http\Responses\Auth;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TwoFactorLoginResponse extends \Laravel\Fortify\Http\Responses\TwoFactorLoginResponse
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
            'message' => __('Complete two-step verification!'),
        ]);
    }
}
