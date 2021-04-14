<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        
        return view('public.public_master');
        // return view('home');
    }
    
    public function DeshboardIndex()
    {
        return view('public.public_master');
    }

    public function Userindex(){
        return Auth::user();
    }
}
