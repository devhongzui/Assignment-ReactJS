@php
    $number_of_page = round($paginator['total'] / $paginator['limit']);
    $has_pages = $number_of_page > 1;
@endphp
@if ($has_pages)
    @php
        $on_first_page = $paginator['offset'] === 0;
        $previous_page_url = route($route_name, ['type' => $route_id, 'offset' => $paginator['offset'] - 1]);

        $has_more_pages = $paginator['offset'] + 1 < $number_of_page;
        $next_page_url = route($route_name, ['type' => $route_id, 'offset' => $paginator['offset'] + 1]);

        $first_item = $paginator['offset'] * $paginator['limit'] + 1;
        $last_item = $first_item + $paginator['limit'] - 1;
        $total = $paginator['total'];

        $range = range(1, $number_of_page);
        $elements = [];
        foreach ($range as $index) {
            $elements[] = [
                $index => route($route_name, ['type' => $route_id, 'offset' => $index - 1]),
            ];
        }

        $current_page = $paginator['offset'] + 1;

        if (count($range) > 13) {
            $start = [];
            $end = [];
            $middle_1 = '...';
            if ($current_page >= 1 && $current_page <= 5) {
                foreach (range(0, 5) as $index) {
                    $start[] = $elements[$index];
                }

                foreach (range($number_of_page - 2, $number_of_page - 1) as $index) {
                    $end[] = $elements[$index];
                }

                $elements = array_merge($start, (array) $middle_1, $end);
            } elseif ($current_page > $number_of_page - 5 && $current_page <= $number_of_page) {
                foreach (range(0, 1) as $index) {
                    $start[] = $elements[$index];
                }

                foreach (range($number_of_page - 6, $number_of_page - 1) as $index) {
                    $end[] = $elements[$index];
                }

                $elements = array_merge($start, (array) $middle_1, $end);
            } else {
                foreach (range(0, 1) as $index) {
                    $start[] = $elements[$index];
                }

                $middle_2 = [];
                foreach (range($current_page - 2, $current_page) as $index) {
                    $middle_2[] = $elements[$index];
                }

                foreach (range($number_of_page - 2, $number_of_page - 1) as $index) {
                    $end[] = $elements[$index];
                }

                $elements = array_merge($start, (array) $middle_1, $middle_2, (array) $middle_1, $end);
            }
        }
    @endphp
    <nav class="d-flex justify-items-center justify-content-between">
        <div class="d-flex justify-content-between flex-fill d-sm-none">
            <ul class="pagination">
                {{-- Previous Page Link --}}
                @if ($on_first_page)
                    <li class="page-item disabled" aria-disabled="true">
                        <span class="page-link">
                            @lang('pagination.previous')
                        </span>
                    </li>
                @else
                    <li class="page-item">
                        <a class="page-link" href="{{ $previous_page_url }}" rel="prev">
                            @lang('pagination.previous')
                        </a>
                    </li>
                @endif

                {{-- Next Page Link --}}
                @if ($has_more_pages)
                    <li class="page-item">
                        <a class="page-link" href="{{ $next_page_url }}" rel="next">
                            @lang('pagination.next')
                        </a>
                    </li>
                @else
                    <li class="page-item disabled" aria-disabled="true">
                        <span class="page-link">@lang('pagination.next')</span>
                    </li>
                @endif
            </ul>
        </div>

        <div class="d-none flex-sm-fill d-sm-flex align-items-sm-center justify-content-sm-between">
            <div>
                <p class="small text-muted">
                    @lang('Showing')
                    <span class="fw-semibold">{{ number_format($first_item) }}</span>
                    @lang('to')
                    <span class="fw-semibold">{{ number_format($last_item) }}</span>
                    @lang('of')
                    <span class="fw-semibold">{{ number_format($total) }}</span>
                    @lang('results')
                </p>
            </div>

            <div>
                <ul class="pagination">
                    {{-- Previous Page Link --}}
                    @if ($on_first_page)
                        <li class="page-item disabled" aria-disabled="true" aria-label="@lang('pagination.previous')">
                            <span class="page-link" aria-hidden="true">&lsaquo;</span>
                        </li>
                    @else
                        <li class="page-item">
                            <a class="page-link" href="{{ $previous_page_url }}" rel="prev"
                               aria-label="@lang('pagination.previous')">&lsaquo;</a>
                        </li>
                    @endif

                    {{-- Pagination Elements --}}
                    @foreach ($elements as $element)
                        {{-- "Three Dots" Separator --}}
                        @if (is_string($element))
                            <li class="page-item disabled" aria-disabled="true">
                                <span class="page-link">{{ $element }}</span>
                            </li>
                        @endif

                        {{-- Array Of Links --}}
                        @if (is_array($element))
                            @foreach ($element as $page => $url)
                                @if ($page === $current_page)
                                    <li class="page-item active" aria-current="page">
                                        <span class="page-link">{{ number_format($page) }}</span>
                                    </li>
                                @else
                                    <li class="page-item">
                                        <a class="page-link" href="{{ $url }}">{{ number_format($page) }}</a>
                                    </li>
                                @endif
                            @endforeach
                        @endif
                    @endforeach

                    {{-- Next Page Link --}}
                    @if ($has_more_pages)
                        <li class="page-item">
                            <a class="page-link" href="{{ $next_page_url }}" rel="next"
                               aria-label="@lang('pagination.next')">&#8250;</a>
                        </li>
                    @else
                        <li class="page-item disabled" aria-disabled="true" aria-label="@lang('pagination.next')">
                            <span class="page-link" aria-hidden="true">&#8250;</span>
                        </li>
                    @endif
                </ul>
            </div>
        </div>
    </nav>
@endif
