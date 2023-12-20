<?php

namespace App\Http\Responses\Auth;

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
            'message' => __('Password changed successfully!'),
        ]);
    }
}
