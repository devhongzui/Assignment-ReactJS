<?php

namespace App\Http\Responses\Profile;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Laravel\Fortify\Contracts\TwoFactorLoginResponse;

class TwoFactorDisabledResponse implements TwoFactorLoginResponse
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
            'message' => __('Turn off two-step verification successfully!'),
        ]);
    }
}
