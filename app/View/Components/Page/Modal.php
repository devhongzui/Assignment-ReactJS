<?php

namespace App\View\Components\Page;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Modal extends Component
{
    /**
     * @var string
     */
    public string $id;

    /**
     * @var string
     */
    public string $style;

    /**
     * @var string
     */
    public string $title;

    /**
     * @var string
     */
    public string $link;

    /**
     * Create a new component instance.
     *
     * @param string $id
     * @param string $title
     * @param string $link
     * @param string $style
     */
    public function __construct(
        string $id,
        string $title,
        string $link,
        string $style = 'modal-dialog modal-dialog-centered modal-xl modal-fullscreen-lg-down'
    )
    {
        $this->id = $id;
        $this->title = $title;
        $this->link = $link;
        $this->style = $style;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return View|Closure|string
     */
    public function render(): View|Closure|string
    {
        return view('components.page.modal');
    }
}
