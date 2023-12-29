<?php

namespace App\Http\Responses\Profile;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TwoFactorEnabledResponse extends \Laravel\Fortify\Http\Responses\TwoFactorEnabledResponse
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
            'qr_code' => [
                'svg' => $request->user()->twoFactorQrCodeSvg(),
                'url' => $request->user()->twoFactorQrCodeUrl(),
            ],
        ]);
    }
}
