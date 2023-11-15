<?php

namespace App\View\Components\Page;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Logo extends Component
{
    /**
     * @var string
     */
    public string $webSiteName;

    /**
     * @var string
     */
    public string $webSiteNameHtml;

    /**
     * Create a new component instance.
     *
     * @param string $webSiteName
     * @param string $webSiteNameHtml
     */
    public function __construct(
        string $webSiteName,
        string $webSiteNameHtml
    )
    {
        $this->webSiteName = $webSiteName;
        $this->webSiteNameHtml = $webSiteNameHtml;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return View|Closure|string
     */
    public function render(): View|Closure|string
    {
        return view('components.page.logo');
    }
}
