<h5 class="ms-3">@lang('Table of contents')</h5>
<ol>
    @foreach ($list as $item => $value)
        <li>
            <a href="#{{ $item }}" role="link" aria-label="{{ $value }}">{{ $value }}</a>
        </li>
    @endforeach
</ol>
