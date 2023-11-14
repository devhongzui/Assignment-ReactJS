<div class="modal fade" id="{{ $id }}">
    <div class="{{ $style }}">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title">{{ $title }}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="@lang('Close')"></button>
            </div>
            <div class="modal-body">
                <modal-lazy data-src="{{ $link }}" />
            </div>
        </div>
    </div>
</div>
