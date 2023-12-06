import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './component/pages/dashboard/dashboard.component';
import { SupplierComponent } from './component/pages/supplier/supplier.component';
import { StockMangerComponent } from './component/pages/stock-manger/stock-manger.component';
import { ProductCategoriesComponent } from './component/pages/product-categories/product-categories.component';
import { ManeProductComponent } from './component/pages/mane-product/mane-product.component';
import { CategoriesComponent } from './component/shared/categories/categories.component';
import { BrandComponent } from './component/pages/brand/brand.component';
import { MainProductComponent } from './component/shared/main-product/main-product.component';
import { WarehouseComponent } from './component/pages/warehouse/warehouse.component';
import { ProductViewComponent } from './component/shared/product-view/product-view.component';
import { UnitComponent } from './component/pages/unit/unit.component';
import { WarrantiesComponent } from './component/pages/warranties/warranties.component';
import { DepartmentComponent } from './component/pages/department/department.component';
import { ImportProductComponent } from './component/pages/import-product/import-product.component';
import { ProfileComponent } from './component/pages/profile/profile.component';
import { PurchaseOrderComponent } from './component/pages/purchase-order/purchase-order.component';
import { PurchasePendingReportComponent } from './component/pages/purchase-pending-report/purchase-pending-report.component';
import { PurchaseInvoiceComponent } from './component/pages/purchase-invoice/purchase-invoice.component';
import { UsersComponent } from './component/pages/users/users.component';
import { VendorComponent } from './component/pages/vendor/vendor.component';
import { OrdershippedComponent } from './component/pages/ordershipped/ordershipped.component';
import { OnlinestoreComponent } from './component/pages/onlinestore/onlinestore.component';
import { FeedbackformComponent } from './component/pages/feedbackform/feedbackform.component';
import { ExpensescategoryComponent } from './component/pages/expensescategory/expensescategory.component';
import { ExpensesComponent } from './component/pages/expenses/expenses.component';
import { CompilationitemordersComponent } from './component/pages/compilationitemorders/compilationitemorders.component';
import { RefundComponent } from './component/pages/refund/refund.component';
import { DiscountComponent } from './component/pages/discount/discount.component';
import { RewardsComponent } from './component/pages/rewards/rewards.component';
import { UpgradeapiComponent } from './component/pages/upgradeapi/upgradeapi.component';
import { TransactionComponent } from './component/pages/transaction/transaction.component';
import { TipsComponent } from './component/pages/tips/tips.component';
import { ShiftsComponent } from './component/pages/shifts/shifts.component';
import { ReturnsComponent } from './component/pages/returns/returns.component';
import { PrepareorderComponent } from './component/pages/prepareorder/prepareorder.component';
import { CloseoutComponent } from './component/pages/closeout/closeout.component';
import { CashlogComponent } from './component/pages/cashlog/cashlog.component';
import { ProductioncostComponent } from './component/pages/productioncost/productioncost.component';
import { ProductionorderplanComponent } from './component/pages/productionorderplan/productionorderplan.component';
import { AddboxComponent } from './component/pages/addbox/addbox.component';

const routes: Routes = [
  {
    path : "",
    component : AdminComponent,
    children : [
      {
        path : "",
        component : DashboardComponent
      },
      {
        path : 'profile',
        component : ProfileComponent
      },
      {
        path : "unit",
        component : UnitComponent
      },
      {
        path : "product/warranties",
        component : WarrantiesComponent
      },
      {
        path : "mene/product",
        component : ManeProductComponent
      },
      {
        path : 'department',
        component : DepartmentComponent
      },
      {
        path : "product/main",
        component : MainProductComponent
      },
      {
        path : "product/categories",
        component : ProductCategoriesComponent
      },
      {
        path : "product/brand",
        component : BrandComponent
      },
      
      {
        path : "supplier",
        component : SupplierComponent
      },
      {
        path : "stockmanger",
        component : StockMangerComponent
      },
      {
        path : "product/categories/add",
        component : CategoriesComponent
      },
      {
        path : "product/categories/add/:catid",
        component : CategoriesComponent
      },

      {
        path : "product/brand/add/:id",
        component : CategoriesComponent
      },
      {
        path : "product/brand/add/:id/edit/:ids",
        component : CategoriesComponent
      },
      {
        path :  "product/warehouse",
        component : WarehouseComponent
      },
      {
        path :  "product/detail",
        component : ProductViewComponent
      },

      {
        path : 'product/importproduct',
        component : ImportProductComponent
      },
      {
        path: "purchaseorder",
        component : PurchaseOrderComponent
      },
      { 
        path : 'purchaseorderreport',
        component : PurchasePendingReportComponent
      },
      {
        path :"purchaseinvoice",
        component : PurchaseInvoiceComponent
      },
      {
        path : "users",
        component : UsersComponent
      },
      {
          path : 'vendor',
          component : VendorComponent
      },
      {
        path : "ordershipped",
        component : OrdershippedComponent
      },
      {
        path : "onlinestore",
        component : OnlinestoreComponent
      },
      {
        path : "feedbackform",
        component :FeedbackformComponent
      },
      {
        path : "expensescategory",
        component :ExpensescategoryComponent
      },
      {
        path : "expenses",
        component :ExpensesComponent
      },
      {
        path : "compilationitemorder",
        component :CompilationitemordersComponent
      },
      {
        path : "refund",
        component :RefundComponent
      },
      {
        path : "discount",
        component :DiscountComponent
      },
      {
        path : "rewards",
        component :RewardsComponent
      },
      {
        path : "upgradeapi",
        component :UpgradeapiComponent
      },
      {
        path : "transactions",
        component :TransactionComponent
      },
      {
        path : "tips",
        component :TipsComponent
      },
      {
        path : "shift",
        component :ShiftsComponent
      },
      {
        path : "returns",
        component :ReturnsComponent
      },
      {
        path : "prepareorder",
        component :PrepareorderComponent
      },
      {
        path : "closeout",
        component :CloseoutComponent
      },
      {
        path : "cashlog",
        component :CashlogComponent
      },
      {
        path : "productioncost",
        component :ProductioncostComponent
      },
      {
        path : "productionorderplan",
        component :ProductionorderplanComponent
      },
      {
        path : "addbox",
        component :AddboxComponent
      }
      
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
