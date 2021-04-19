<template>
  <div id="categoryList" class="content-wrapper">
    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header border-0">
                <div class="d-flex justify-content-between">
                  <h3 class="card-title">Category List</h3>
                  <!-- {{categories}} -->
                  <el-button type="primary" round
                    >Add New <i class="el-icon-plus"></i
                  ></el-button>
                </div>
              </div>
              <el-table
                ref="multipleTable"
                :data="categories.data"
                style="width: 100%"
                @selection-change="handleSelectionChange"
              >
                <el-table-column type="selection" width="55"> </el-table-column>
                <el-table-column label="Date" width="120">
                  <template slot-scope="scope">{{ scope.row.created_at | timeFormet }}</template>
                </el-table-column>
                <el-table-column property="name" label="Name" width="120">
                </el-table-column>
                
                <el-table-column  label="Action" width="150">
                  <template slot-scope="scope">
                    <el-button @click="handleClick" type="text" size="small"
                      >Detail</el-button
                    >
                    <el-button type="text" size="small">Edit</el-button>
                    <el-button @click="deleteCategory(scope.row.id)" type="text" size="small">Delete</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-pagination
                class="text-center"
                background
                layout="prev, pager, next"
                :total="1000"
              >
              </el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryList",
  data() {
    return {
      multipleSelection: [],
    };
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClick() {
        console.log('click');
      },
      categoryList() {
      this.$store.dispatch("category/categoryList");
    },
    deleteCategory(id){
      this.$store.dispatch("category/deleteCategory",id);
      this.$message({
            message: "Category Delete Successfully...",
            type: "success",
          });
    }
  },
  created() {
    this.categoryList();
  },

  computed:{
    categories(){
      return this.$store.getters['category/categoryList']
    }
  }
};
</script>

<style>
</style>