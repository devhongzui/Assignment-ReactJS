<?php

namespace App\Http\Controllers\Api\Heath;

use App\Http\Controllers\Controller;
use App\Models\Heath\Activity;
use App\Models\Heath\Measurement;
use App\Models\Heath\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $limit = $request->get('limit', 8);

        $patient = Patient::with(['measurements', 'activities']);

        if ($request->exists('query')) {
            $search = "%{$request->get('query')}%";

            $patient->orWhere('last_name', 'like', $search)
                ->orWhere('first_name', 'like', $search)
                ->orWhere('contacts.phone', 'like', $search)
                ->orWhere('contacts.mail', 'like', $search)
                ->orWhere('contacts.other', 'like', $search);
        }

        if ($request->exists('filters'))
            foreach ($request->filters as $field_name => $value)
                switch ($field_name) {
                    case 'status':
                        $patient->where($field_name, (int)$value);
                        break;
                    case 'phone':
                    case 'mail':
                    case 'other':
                        $patient->where("contacts.$field_name", $value);
                        break;
                    default:
                        $patient->where($field_name, $value);
                        break;
                }

        if ($request->exists(['sorting.sorting_field', 'sorting.sorting_direction']))
            $patient->orderBy($request->sorting['sorting_field'], $request->sorting['sorting_direction']);

        return $patient->paginate($limit);
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param string $id
     * @return Patient|Measurement[]|Activity[]
     */
    public function show(Request $request, string $id)
    {
        $patient = Patient::find($id);
        $limit = $request->get('limit', 8);

        switch ($request->relationship) {
            case 'measurement':
                $measurements = $patient->measurements();

                if ($request->exists(['sorting.measurement_sorting_field', 'sorting.measurement_sorting_direction']))
                    $measurements->orderBy(
                        $request->sorting['measurement_sorting_field'],
                        $request->sorting['measurement_sorting_direction']
                    );

                return $measurements->paginate($limit);
            case 'activity':
                $activities = $patient->activities();

                if ($request->exists(['sorting.activity_sorting_direction', 'sorting.activity_sorting_field']))
                    $activities->orderBy(
                        $request->sorting['activity_sorting_direction'],
                        $request->sorting['activity_sorting_field']
                    );

                return $activities->paginate($limit);
            default:
                return $patient;
        }
    }
}
