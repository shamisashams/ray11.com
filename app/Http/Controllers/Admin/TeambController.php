<?php

/**
 *  app/Http/Controllers/Admin/ProductController.php
 *
 * Date-Time: 30.07.21
 * Time: 10:37
 * @author Insite LLC <hello@insite.international>
 */

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CustomerRequest;
use App\Http\Requests\Admin\ProductRequest;
use App\Http\Requests\Admin\TeamRequest;
use App\Models\Category;
use App\Models\Customer;
use App\Models\File;
use App\Models\Product;
use App\Models\Skill;
use App\Models\Team;
use App\Models\Teamb;
use App\Repositories\CategoryRepositoryInterface;
use App\Repositories\Eloquent\CustomerRepository;
use App\Repositories\Eloquent\TeambRepository;
use App\Repositories\Eloquent\TeamRepository;
use App\Repositories\ProductRepositoryInterface;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use ReflectionException;
use Illuminate\Support\Facades\Hash;

class TeambController extends Controller
{
    /**
     * @var ProductRepositoryInterface
     */
    private $teambRepository;




    public function __construct(
        TeambRepository $teambRepository
    ) {
        $this->teambRepository = $teambRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Application|Factory|View
     */
    public function index(ProductRequest $request)
    {
        /*return view('admin.pages.product.index', [
            'products' => $this->productRepository->getData($request, ['translations', 'categories'])
        ]);*/

        return view('admin.nowa.views.teamb.index', [
            'data' => $this->teambRepository->getData($request),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Application|Factory|View
     */
    public function create()
    {
        $team = $this->teambRepository->model;
        $url = locale_route('teamb.store', [], false);
        $method = 'POST';

        /*return view('admin.pages.product.form', [
            'product' => $product,
            'url' => $url,
            'method' => $method,
            'categories' => $this->categories
        ]);*/

        return view('admin.nowa.views.teamb.form', [
            'url' => $url,
            'method' => $method,
            'team' => $team,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ProductRequest $request
     *
     * @return Application|RedirectResponse|Redirector
     * @throws ReflectionException
     */
    public function store(Request $request)
    {

        // dd($request->all());
        $request->validate([
            'company' => 'required'
        ]);
        $saveData = Arr::except($request->except('_token'), []);
        $saveData['status'] = isset($saveData['status']) && (bool)$saveData['status'];
        $saveData['pos'] = $saveData['pos'] ?? (int)$saveData['pos'];

        $customer = $this->teambRepository->create($saveData);


        //dd($saveData);


        // Save Files
        if ($request->hasFile('images')) {
            $customer = $this->teambRepository->saveFiles($customer->id, $request);
        }

        return redirect(locale_route('teamb.index', $customer->id))->with('success', __('admin.create_successfully'));
    }

    /**
     * Display the specified resource.
     *
     * @param string $locale
     * @param Product $product
     *
     * @return Application|Factory|View
     */
    public function show(string $locale, Customer $product)
    {
        return view('admin.pages.product.show', [
            'product' => $product,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param string $locale
     * @param Category $category
     *
     * @return Application|Factory|View
     */
    public function edit(string $locale, Teamb $teamb)
    {
        $url = locale_route('teamb.update', $teamb->id, false);
        $method = 'PUT';

        /*return view('admin.pages.product.form', [
            'product' => $product,
            'url' => $url,
            'method' => $method,
            'categories' => $this->categories
        ]);*/

        return view('admin.nowa.views.teamb.form', [
            'team' => $teamb,
            'url' => $url,
            'method' => $method,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ProductRequest $request
     * @param string $locale
     * @param Product $product
     * @return Application|RedirectResponse|Redirector
     * @throws ReflectionException
     */
    public function update(Request $request, string $locale, Teamb $teamb)
    {
        //dd($request->all());
        $request->validate([
            'company' => 'required'
        ]);

        $saveData = Arr::except($request->except('_token'), []);
        $saveData['status'] = isset($saveData['status']) && (bool)$saveData['status'];
        $saveData['pos'] = $saveData['pos'] ?? (int)$saveData['pos'];


        //dd($staff->id);

        if ($this->teambRepository->update($teamb->id, $saveData)) {
        }

        $this->teambRepository->saveFiles($teamb->id, $request);


        return redirect(locale_route('teamb.index', $teamb->id))->with('success', __('admin.update_successfully'));
    }
    public function destroy(string $locale, Teamb $teamb)
    {
        if (!$teamb->delete()) {
            return redirect(locale_route('teamb.index', $teamb->id))->with('danger', __('admin.not_delete_message'));
        }
        return redirect(locale_route('teamb.index'))->with('success', __('admin.delete_message'));
    }



}
