<?php

namespace App\Http\Responses\Auth;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class FailedPasswordResetLinkRequestResponse extends \Laravel\Fortify\Http\Responses\FailedPasswordResetLinkRequestResponse
{
    /**
     * Create an HTTP response that represents the object.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function toResponse($request): JsonResponse
    {
        throw ValidationException::withMessages([
            'email' => __($this->status),
        ]);
    }
}
