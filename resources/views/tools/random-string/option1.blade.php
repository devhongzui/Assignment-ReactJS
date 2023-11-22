<div class="row">
    <p class="col-xl-4">@lang('String creation method')</p>
    <ul class="nav nav-pills mb-3 col-xl-8" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active p-2" data-bs-toggle="tab" data-bs-target="#subsets-selection-tab-pane"
                    type="button" role="tab" aria-controls="subsets-selection-tab-pane" aria-selected="true">
                @lang('By Choice')
            </button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link p-2" data-bs-toggle="tab" data-bs-target="#characters-selection-tab-pane"
                    type="button" role="tab" aria-controls="characters-selection-tab-pane" aria-selected="false">
                @lang('By Character')
            </button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link p-2" data-bs-toggle="tab" data-bs-target="#others-selection-tab-pane" type="button"
                    role="tab" aria-controls="others-selection-tab-pane" aria-selected="false">
                @lang('Other options')
            </button>
        </li>
    </ul>
</div>
<div class="tab-content">
    <div class="tab-pane fade show active" id="subsets-selection-tab-pane" role="tabpanel" tabindex="0"
         aria-labelledby="subsets-selection-tab">
        <div class="form-check mb-3">
            <input type="checkbox" class="form-check-input" id="alphabetic_lowercase" name="alphabetic_lowercase"
                   checked data-value="abcdefghijklmnopqrstuvwxyz">
            <label for="alphabetic_lowercase" class="form-check-label"> @lang('Lowercase characters (a-z)')</label>
        </div>
        <div class="form-check mb-3">
            <input type="checkbox" class="form-check-input" id="alphabetic_uppercase" name="alphabetic_uppercase"
                   checked data-value="ABCDEFGHIJKLMNOPQRSTUVWXYZ">
            <label for="alphabetic_uppercase" class="form-check-label">@lang('Uppercase characters (A-Z)')</label>
        </div>
        <div class="form-check mb-3">
            <input type="checkbox" class="form-check-input" id="numeric" name="numeric" checked data-value="numeric">
            <label for="numeric" class="form-check-label">@lang('Numeric characters (0-9)')</label>
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="special" name="special" checked
                   data-value="!#$%&\()*+-./:;<=>?@[\]^_{|}~">
            <label for="special" class="form-check-label">@lang('Special characters')</label>
        </div>
    </div>
    <div class="tab-pane fade" id="characters-selection-tab-pane" role="tabpanel" tabindex="0"
         aria-labelledby="characters-selection-tab">
        <div class="row">
            <label for="custom" class="form-label col-xl-3">@lang('Custom string')</label>
            <div class="col-xl-9">
                <input type="text" class="form-control bg-transparent" id="custom" name="custom"
                       placeholder="@lang('Enter Custom String (At least 1 character)')">
            </div>
        </div>
    </div>
    <div class="tab-pane fade" id="others-selection-tab-pane" role="tabpanel" tabindex="0"
         aria-labelledby="others-selection-tab">
        <div class="row">
            <label for="other_option" class="form-label col-xl-3">@lang('Options')</label>
            <div class="col-xl-9">
                <div class="form-check">
                    <input class="form-check-input" type="radio" id="alphanumeric" name="other_option" checked
                           value="alphanumeric">
                    <label class="form-check-label" for="alphanumeric">@lang('Alphanumeric (a-z A-Z 0-9)')</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" id="alphabetic" name="other_option"
                           value="alphabetic">
                    <label class="form-check-label" for="alphabetic">@lang('Letters (a-z A-Z)')</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" id="hex" name="other_option"
                           value="hex">
                    <label class="form-check-label" for="hex">@lang('Hexadecimal (0-9 a-f)')</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" id="binary" name="other_option"
                           value="binary">
                    <label class="form-check-label" for="binary">@lang('Binary (01)')</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" id="octal" name="other_option"
                           value="octal">
                    <label class="form-check-label" for="octal">@lang('Octal (0-7)')</label>
                </div>
            </div>
        </div>
    </div>
</div>
