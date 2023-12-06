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
import { MdiscountComponent } from './component/pages/mdiscount/mdiscount.component';
import { OutOfStockReportComponent } from './component/pages/out-of-stock-report/out-of-stock-report.component';
import { StockSummaryReportComponent } from './component/pages/stock-summary-report/stock-summary-report.component';
import { DistributionExpensesComponent } from './component/pages/distribution-expenses/distribution-expenses.component';
import { ProductComponentsReportComponent } from './component/pages/product-components-report/product-components-report.component';
import { UngroupCompilationReportComponent } from './component/pages/ungroup-compilation-report/ungroup-compilation-report.component';
import { UngroupCompilationItemsComponent } from './component/pages/ungroup-compilation-items/ungroup-compilation-items.component';
import { InventoryScanningReportComponent } from './component/pages/inventory-scanning-report/inventory-scanning-report.component';
import { LostProductComponent } from './component/pages/lost-product/lost-product.component';
import { ReportPossibilityProductionComponent } from './component/pages/report-possibility-production/report-possibility-production.component';
import { ReportProductionCostsComponent } from './component/pages/report-production-costs/report-production-costs.component';
import { StageProductionReportComponent } from './component/pages/stage-production-report/stage-production-report.component';
import { ReportProductionExpenseComponent } from './component/pages/report-production-expense/report-production-expense.component';
import { VariancesProductionQualitiesReportComponent } from './component/pages/variances-production-qualities-report/variances-production-qualities-report.component';
import { ProductionReceivesReportComponent } from './component/pages/production-receives-report/production-receives-report.component';
import { ProductComponentsComponent } from './component/pages/product-components/product-components.component';
import { ProductionPlansReportComponent } from './component/pages/production-plans-report/production-plans-report.component';
import { ProductionOrderReportComponent } from './component/pages/production-order-report/production-order-report.component';
import { NetSalesReportComponent } from './component/pages/net-sales-report/net-sales-report.component';
import { NetPurchaseReportComponent } from './component/pages/net-purchase-report/net-purchase-report.component';
import { NetTransferReportComponent } from './component/pages/net-transfer-report/net-transfer-report.component';
import { NetExpenseComponent } from './component/pages/net-expense/net-expense.component';
import { CancelledOrderComponent } from './component/pages/cancelled-order/cancelled-order.component';
import { PendingOrderComponent } from './component/pages/pending-order/pending-order.component';
import { OrdershippedComponent } from './Component/Pages/ordershipped/ordershipped.component';
import { ScanBoxComponent } from './component/pages/scan-box/scan-box.component';
import { JournalEntryComponent } from './component/pages/journal-entry/journal-entry.component';
import { SaleOrderBookComponent } from './component/pages/sale-order-book/sale-order-book.component';
import { DropShippingComponent } from './component/pages/drop-shipping/drop-shipping.component';
import { OutstadingReportComponent } from './component/pages/outstading-report/outstading-report.component';
import { CashBookComponent } from './component/pages/cash-book/cash-book.component';
import { BankBookComponent } from './component/pages/bank-book/bank-book.component';


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
      },
      {
        path : "mdiscount",
        component :MdiscountComponent
      },
      {
        path :"outofstockreport",
        component : OutOfStockReportComponent
      },
      {
        path : "stocksummaryreport",
        component : StockSummaryReportComponent
      },
      {
        path : "distributionexpenses",
        component : DistributionExpensesComponent
      },
      {
        path : "productcomponentsreport",
        component: ProductComponentsReportComponent
      },
      {
        path : 'ungroupcompilationreport',
        component : UngroupCompilationReportComponent
      },
      {
        path : "ungroupcompilationitems",
        component : UngroupCompilationItemsComponent
      },
      {
        path : "inventoryscanningreport",
        component : InventoryScanningReportComponent
      },
      {
        path : 'lostproduct',
        component : LostProductComponent
      },
      {
        path : "reportpossibilityproduction",
        component : ReportPossibilityProductionComponent
      },
      {
        path : "reportproductioncosts",
        component : ReportProductionCostsComponent
      },
      {
        path:"stageproductionreport",
        component : StageProductionReportComponent
      },
      {
        path : "reportproductionexpense",
        component: ReportProductionExpenseComponent
      },
      {
           path : "variancesproductionqualitiesreport",
           component: VariancesProductionQualitiesReportComponent
      },
      {
        path : "productionreceivesreport",
        component : ProductionReceivesReportComponent
      },
      {
        path : "productcomponents",
        component : ProductComponentsComponent
      },
      {
        path : "productionplansreport",
        component : ProductionPlansReportComponent
      },
      {
        path : "productionorderreport",
        component: ProductionOrderReportComponent
      },
      {
        path : "netsalesreport",
        component: NetSalesReportComponent
      },
      {
        path: "netpurchasereport",
        component: NetPurchaseReportComponent
      },
      {
        path : "nettransferreport",
        component: NetTransferReportComponent
      },
      {
        path : "netexpense",
        component: NetExpenseComponent
      },
      {
        path : "cancelledorder",
        component: CancelledOrderComponent
      },
      {
        path : "pendingorder",
        component: PendingOrderComponent
      },
      {
        path : "ordershipped",
        component: OrdershippedComponent
      },
      {
        path : "scanbox",
        component : ScanBoxComponent
      },
      {
        path : "journalentry",
        component: JournalEntryComponent
      },
      {
        path :"dropshipping",
        component : DropShippingComponent
      },
      {
        path : "outstadingreport",
        component : OutstadingReportComponent
      },
      {
        path : "cashbook",
        component: CashBookComponent
      },
      {
        path : "bankbook",
        component: BankBookComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
