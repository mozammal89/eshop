
<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                    	<div id="admin-master">
                        	<h1>Hello Admin Master</h1>
                            <router-link to='/admin/test4'>Test</router-link>
                            <router-view></router-view>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
