<?php

namespace App\View\Components\Page;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;
use StdClass;

class Detail extends Component
{
    /**
     * @var string
     */
    public string $link;

    /**
     * @var StdClass
     */
    public StdClass $image;

    /**
     * @var string
     */
    public string $subTitle;

    /**
     * @var string
     */
    public string $title;

    /**
     * @var string
     */
    public string $description;

    /**
     * @var array<StdClass>
     */
    public array $pills;

    /**
     * Create a new component instance.
     *
     *
     */
    public function __construct(
        string   $link,
        StdClass $image,
        string   $subTitle,
        string   $title,
        string   $description,
        array    $pills,
    )
    {
        $this->link = $link;
        $this->image = $image;
        $this->subTitle = $subTitle;
        $this->title = $title;
        $this->description = $description;
        $this->pills = $pills;
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.page.detail');
    }
}
