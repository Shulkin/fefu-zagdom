<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FormWebController extends Controller
{
    public function formNative(Request $request) {
        $scope = $request->toArray();
        return view('form-native', compact('scope'));
    }

    public function formAjax() {
        return view('form-ajax');
    }
}
