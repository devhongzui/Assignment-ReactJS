<?php

namespace App\Http\Responses\Auth;

use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class FailedPasswordResetResponse extends \Laravel\Fortify\Http\Responses\FailedPasswordResetResponse
{
    /**
     * Create an HTTP response that represents the object.
     *
     * @param Request $request
     */
    public function toResponse($request)
    {
        throw ValidationException::withMessages([
            'email' => __($this->status),
        ]);
    }
}
