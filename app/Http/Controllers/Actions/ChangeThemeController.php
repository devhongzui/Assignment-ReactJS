<?php

namespace App\Http\Controllers\Actions;

use App\Http\Controllers\Controller;
use App\Http\Requests\Actions\ChangeThemeRequest;
use Illuminate\Http\JsonResponse;

class ChangeThemeController extends Controller
{
    /**
     * @param ChangeThemeRequest $request
     * @return JsonResponse
     */
    public function store(ChangeThemeRequest $request): JsonResponse
    {
        $request->session()->put(
            $request->validated()
        );

        return response()->json([
            'message' => __('Changed theme successfully!')
        ]);
    }
}
