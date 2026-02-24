<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use App\Services\ContactUsService;
use App\Http\Requests\ContactUsStore;
use Illuminate\View\View;

class ContactUsController extends Controller
{
    protected ContactUsService $contactUsService;

    public function __construct(ContactUsService $contactUsService)
    {
        $this->contactUsService = $contactUsService;
    }

    public function create(): View
    {
        return view('contact');
    }

    public function store(ContactUsStore $request): RedirectResponse
    {
        $validated = $request->validated();
        $this->contactUsService->processContactUsForm($validated);
        return redirect()->back()->with('success', 'Your message has been sent.');
    }

}
