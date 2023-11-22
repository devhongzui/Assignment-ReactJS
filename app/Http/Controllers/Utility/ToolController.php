<?php

namespace App\Http\Controllers\Utility;

use App\Http\Controllers\Controller;
use App\Models\Tool;
use Illuminate\Http\Request;
use Illuminate\View\View;

class ToolController extends Controller
{
    /**
     * @param Request $request
     * @return View
     */
    public function show(Request $request): View
    {
        $tools = Tool
            ::paginate($request->get('s', 8))
            ->appends($request->query());

        return $request->wantsJson()
            ? view('study.courses.lazy')->with([
                'data' => $tools,
                'is_lazy' => true,
            ])
            : view('study.courses')->with([
                'web_title' => __('Summary of Tools'),
                'web_description' => implode(' ', [
                    __('Diverse sources of documents and information to support those who are passionate about programming and Information Technology'),
                    __("We've compiled useful tools, resources, and information to help you improve your programming skills, learn IT, and solve problems related to the industry."),
                ]),
                'web_image' => asset('storage/images/undraw/Multitasking.png'),
                'data' => $tools,
                'tool_page' => true,
            ]);
    }
}
