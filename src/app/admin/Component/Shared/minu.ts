
export  const Sub_Menu = [
  {
    "Main_name" : "ERP BUSSINES ",
            'main_icon' : 'bx bx-grid-alt',
            'main_id'   : 'erp_system',
             "main_href" : "#erp_system",
      'sub' : [{ "name" : "Product Management ",
                "icon" : 'ri-product-hunt-line',   
                'mat_icons' : '',
                'id' :  'Product_Manger',
       'super_manu' :  [
       
            {"name_super_sub" : "Products",
            "routes" : "/admin/mene/product",
            "img" : 'new-product.png'
            } ,
   
            {  "name_super_sub" : "Departments ",
            "routes" : "/admin/department",
            "img" : 'network.png'
             },
            //  {  "name_super_sub" : "Tables ",
            //  "routes" : "/admin/department",
            //  "img" : 'dinner-table.png'
            //   },
   
            {"name_super_sub" : " Categories",
            "routes" : "/admin/product/categories",
            "img" : 'grid.png'
           } ,
           {"name_super_sub" : " Units",
           "routes" : "/admin/unit",
           "img" : 'teamwork.png'
           } ,
            {"name_super_sub" : " Brands",
            "routes" : "/admin/product/brand",
            "img" : 'brand-image.png'
            } ,
          
           
            {"name_super_sub" : "Warranties",
             "routes" : "/admin/product/warranties",
             "img" : 'warranty.png'
            } ,
            // {"name_super_sub" : "Import Products",
            // "routes" : "/admin/product/importproduct",
            //  "img" : 'import.png'
            // } ,
            // {"name_super_sub" : " Export Product",
            // "routes" : "",
            // "img" : 'product.png'
            // } ,
            {"name_super_sub" : " Print Barcodes",
            "routes" : "",
            "img" : 'barcode-scanner.png'
            } ,
            {"name_super_sub" : "Audit Logs",
            "routes" : "/admin/product",
            "img" : 'audit.png'
            } ,
            
            
           ]
        
      },
      // { "name" : " Product Report",
      //   "icon" : '',
      //   'mat_icons' : 'assessment',
      //   'id' :  'product_report',
      //   'super_manu' :  [
   
      //       {"name_super_sub" : " Report Products",
      //       "routes" : "",
      //       "img" : 'sales.png'
      //       } ,
      //       {"name_super_sub" : " Report Categories",
      //       "routes" : "",
      //       "img" : 'folder.png'
      //       } ,
      //       {"name_super_sub" : " Report Brands",
      //       "routes" : "",
      //       "img" : 'analysis.png'
      //       } ,
      //       {"name_super_sub" : " Report Units & Base Units",
      //       "routes" : "",
      //       "img" : 'news.png'
      //       } ,
      //       {"name_super_sub" : " Report Warranties",
      //       "routes" : "",
      //       "img" : 'warranty1.png'
      //       } ,
      //       {"name_super_sub" : " Report Import Products",
      //       "routes" : "",
      //       "img" : 'import1.png'
      //       } ,
      //       {"name_super_sub" : "Report Labels | Barcodes",
      //       "routes" : "",
      //       "img" : 'barcode.png'
      //       } ,
      //       {"name_super_sub" : " Report Movements",
      //       "routes" : "",
      //       "img" : 'movement.png'
      //       } ,
           
      //   ]
      // },
        { "name" : "Supply Management",
        "icon" : 'ri-store-3-line',
        'mat_icons' : '',
        'id' :  'Supply_Manger',
        'super_manu' : [
   
            {"name_super_sub" : "Suppliers",
            "routes" : "/admin/supplier",
            "img" : 'supply-chain.png'
            } ,
            // {"name_super_sub" : "Supply Report",
            // "routes" : "/admin/product",
            // "img" : 'report.png'
            // } ,
            {"name_super_sub" : "Vendors ",
            "routes" : "/admin/vendor",
            "img" : 'vendor.png'
            } ,
            // {"name_super_sub" : "Vendor Report",
            // "routes" : "/admin/product",
            // "img" : 'development.png'
            // } ,
            {"name_super_sub" : "Customers",
            "routes" : "/admin/product",
            "img" : 'information.png'
            } ,
            // {"name_super_sub" : "Customers Report",
            // "routes" : "/admin/product",
            // "img" : 'consumer2.png'
            // } ,
            {"name_super_sub" : "Audit Logs",
            "routes" : "/admin/product",
            "img" : 'audit.png'
            } ,
        ]
        
      },
      { "name" : "Sales Bouns Management",
      "icon" : '',
      'mat_icons' : 'report_gmailerrorred',
      'id' :  'Stock_Manger',
      'super_manu' : [
                {"name_super_sub" : "Commission",
                "routes" : "/admin/",
                "img" : 'balanced.png'
                },
              {"name_super_sub" : "Audit Logos",
              "routes" : "/admin/",
              "img" : 'balanced.png'
              },
      
         
      ]
    },
      { "name" : "Employee Management",
      "icon" : 'ri-store-3-line',
      'mat_icons' : '',
      'id' :  'Supply_Manger',
      'super_manu' : [
 
          {"name_super_sub" : "Users",
          "routes" : "/admin/users",
          "img" : 'supply-chain.png'
          } ,
          // {"name_super_sub" : "Supply Report",
          // "routes" : "/admin/product",
          // "img" : 'report.png'
          // } ,
          {"name_super_sub" : "Roles  ",
          "routes" : "/admin/product",
          "img" : 'vendor.png'
          } ,
          // {"name_super_sub" : "Vendor Report",
          // "routes" : "/admin/product",
          // "img" : 'development.png'
          // } ,
          {"name_super_sub" : " Permissions",
          "routes" : "/admin/product",
          "img" : 'information.png'
          } ,
          // {"name_super_sub" : "Customers Report",
          // "routes" : "/admin/product",
          // "img" : 'consumer2.png'
          // } ,
          {"name_super_sub" : "Audit Logs",
          "routes" : "/admin/product",
          "img" : 'audit.png'
          } ,
      ]
      
      },
       { "name" : "Inventory Management",
        "icon" : '',
        'mat_icons' : 'report_gmailerrorred',
        'id' :  'Stock_Manger',
        'super_manu' : [
                  {"name_super_sub" : "Inventory Scanning",
                  "routes" : "/admin/",
                  "img" : 'balanced.png'
                  },
                {"name_super_sub" : "Inventory Variances",
                "routes" : "/admin/",
                "img" : 'balanced.png'
                },
        
                {"name_super_sub" : "Modify Inventory ",
                "routes" : "/admin/",
                "img" : 'balanced.png'
                },
                {"name_super_sub" : "Storage Areas ",
                "routes" : "/admin/",
                "img" : 'balanced.png'
                },
                {"name_super_sub" : "Branch Transfers",
                "routes" : "/admin/",
                "img" : 'balanced.png'
                },
                {"name_super_sub" : "Branch Receivers ",
                "routes" : "/admin/",
                "img" : 'balanced.png'
                },
                {"name_super_sub" : "Transfers & Receivers",
                "routes" : "/admin/",
                "img" : 'balanced.png'
                },
                {"name_super_sub" : "Audit Logs",
                "routes" : "/admin/",
                "img" : 'balanced.png'
                },
        ]
      },
       { "name" : "Inventory Reports",
        "icon" : '',
        'mat_icons' : 'report_gmailerrorred',
        'id' :  'Stock_Report',
        'super_manu' : [
     
          {"name_super_sub" : "Inventory Scanning ",
          "routes" : "/admin/inventoryscanningreport",
          "img" : 'scan.png'
          },
          {"name_super_sub" : "Inventory Variances",
          "routes" : "/admin/",
          "img" : 'report-3.png'
          },
          {"name_super_sub" : "Modify Inventory",
          "routes" : "/admin/",
          "img" : 'stock-4.png'
          },
          {"name_super_sub" : "Storage Areas ",
          "routes" : "/admin/",
          "img" : 'audit-file.png'
          },
          {"name_super_sub" : " Branch Transfers",
          "routes" : "/admin/",
          "img" : 'allocation.png'
          },
          {"name_super_sub" : " Branch Receivers",
          "routes" : "/admin/",
          "img" : 'branch-3.png'
          },
          {"name_super_sub" : "Transfers &  Receivers",
          "routes" : "/admin/",
          "img" : 'branch-3.png'
          },
          {"name_super_sub" : "Opening Inventory",
          "routes" : "/admin/",
          "img" : 'warehouse.png'
          },
          {"name_super_sub" : "Closing Inventory",
          "routes" : "/admin/",
          "img" : 'not-available.png'
          },
          {"name_super_sub" : "Out of Stock ",
          "routes" : "/admin/outofstockreport",
          "img" : 'out-of-stock.png'
          },
          {"name_super_sub" : " Low Stock",
          "routes" : "/admin/",
          "img" : 'stock-market.png'
          },
          {"name_super_sub" : "Slow-Moving Inventory",
          "routes" : "/admin/",
          "img" : 'water.png'
          },
          {"name_super_sub" : "Expired Inventory",
          "routes" : "/admin/",
          "img" : 'dead-stock.png'
          },
          {"name_super_sub" : "Inventory Balance",
          "routes" : "/admin/",
          "img" : 'balance.png'
          },
        
          {"name_super_sub" : " Audit Logs",
          "routes" : "/admin/",
          "img" : 'audit-file.png'
          },
        ]
      },
       { "name" : "Purchase Management",
        "icon" : 'ri-git-repository-private-line',
        'mat_icons' : '',
        "id" : "Purchase_Manger",
        'super_manu' : [
          // {"name_super_sub" : " Preparing Order",
          // "routes" : "/admin/",
          // "img" : 'order-listo.png'
          // },
          {"name_super_sub" : "Purchase Order",
          "routes" : "/admin/purchaseorder",
          "img" : 'order-listo.png'
          },
          {"name_super_sub" : "Purchase Invoice",
          "routes" : "/admin/purchaseinvoice",
          "img" : 'order-fulfillment.png'
          },
        
          {"name_super_sub" : "Return Purchase Invoice",
          "routes" : "/admin/purchaseinvoice",
          "img" : 'procurement.png'
          },
        ]
     },
       { "name" : "Purchase Reports", 
        "icon" : 'ri-git-repository-private-fill',
        'mat_icons' : '', 
        "id" : "Purchase_Report",
        'super_manu' : [
          {"name_super_sub" : "Purchase Order Pending",
          "routes" : "/admin/purchaseorderreport",
          "img" : 'order-listo.png'
          },
          {"name_super_sub" : "Purchase Order",
          "routes" : "/admin/",
          "img" : 'order-listo.png'
          },
          {"name_super_sub" : "Outstanding Report",
          "routes" : "/admin/outstadingreport",
          "img" : 'order-listo.png'
          },

          {"name_super_sub" : "Purchase Invoice",
          "routes" : "/admin/",
          "img" : 'buy.png'
          },
          {"name_super_sub" : "Return Purchase Invoices",
          "routes" : "/admin/",
          "img" : 'return.png'
          },
          {"name_super_sub" : "Product Cost",
          "routes" : "/admin/",
          "img" : 'cost.png'
          },
          {"name_super_sub" : "Purchases Due Date",
          "routes" : "/admin/",
          "img" : 'productivity.png'
          },
          {"name_super_sub" : "Payment Purchase Invoices",
          "routes" : "/admin/",
          "img" : 'cash-on-delivery.png'
          },
          {"name_super_sub" : "Supplier Invoices",
          "routes" : "/admin/",
          "img" : 'cash-on-delivery.png'
          },
          {"name_super_sub" : "Purchase Expenses",
          "routes" : "/admin/",
          "img" : 'spending.png'
          },
          {"name_super_sub" : "Audit Logs",
          "routes" : "/admin/",
          "img" : 'audit-2.png'
          },
          
        ]

     },
      { "name" : "Sales Management",
        "icon" : '',
        'mat_icons' : 'insert_chart',
        "id" : "Sales_Manger",
        'super_manu' : [
          {"name_super_sub" : "Quotation",
          "routes" : "/admin/",
          "img" : 'project-management.png'
          },
          {"name_super_sub" : "Preparation Order",
          "routes" : "/admin/",
          "img" : 'check-box.png'
          },
          {"name_super_sub" : "Sales Invoice",
          "routes" : "/admin/",
          "img" : 'point-of-sale.png'
          },
          // {"name_super_sub" : "Sales Invoice",
          // "routes" : "/admin/",
          // "img" : 'point-of-sale.png'
          // },
          {"name_super_sub" : "Return Sales Invoice",
          "routes" : "/admin/",
          "img" : 'money.png'
          },
          {"name_super_sub" : "Delivery Sales Invoice",
          "routes" : "/admin/",
          "img" : 'sales2.png'
          },
          // {"name_super_sub" : "Special Offer Sales",
          // "routes" : "/admin/",
          // "img" : 'ribbon.png'
          // },
          {"name_super_sub" : "Fund Inventory",
          "routes" : "/admin/",
          "img" : 'procurement3.png'
          },
        ]
      },
      { "name" : "Sales Reports", 
        "icon" : '',
        'mat_icons' : 'inventory',
        "id" : "Sales_Report",
        'super_manu' : [
          {"name_super_sub" : "Quotation",
          "routes" : "/admin/",
          "img" : 'paper.png'
          },
          {"name_super_sub" : "Preparation Order",
          "routes" : "/admin/",
          "img" : 'online-order.png'
          },
          {"name_super_sub" : "Sales Invoice",
          "routes" : "/admin/",
          "img" : 'sale.png'
          },
          {"name_super_sub" : "Return Sales Invoices",
          "routes" : "/admin/",
          "img" : 'special-offer.png'
          },
          {"name_super_sub" : "Delivery Sales Invoices",
          "routes" : "/admin/",
          "img" : 'warehouse2.png'
          },
         
          {"name_super_sub" : "Payment Sales Invoices",
          "routes" : "/admin/",
          "img" : 'economy.png'
          },
          {"name_super_sub" : "Report Cash Sales",
          "routes" : "/admin/",
          "img" : 'economy4.png'
          },
          {"name_super_sub" : "Payment Sales Invoices",
          "routes" : "/admin/",
          "img" : 'special-offer.png'
          },
          {"name_super_sub" : " Newtwork Payment Sales ",
          "routes" : "/admin/",
          "img" : 'special-offer.png'
          },
          {"name_super_sub" : "Cash | Network Payments",
          "routes" : "/admin/",
          "img" : 'special-offer.png'
          },
          {"name_super_sub" : "Sales Invoice Due Date",
          "routes" : "/admin/",
          "img" : 'special-offer.png'
          },
          {"name_super_sub" : "Sales Invoice Profit",
          "routes" : "/admin/",
          "img" : 'special-offer.png'
          },
          
          {"name_super_sub" : "Sales & Revenue salesman",
          "routes" : "/admin/",
          "img" : 'special-offer.png'
          },
          {"name_super_sub" : "Commission Salesman",
          "routes" : "/admin/",
          "img" : 'special-offer.png'
          },
          {"name_super_sub" : "Customer Balance",
          "routes" : "/admin/",
          "img" : 'special-offer.png'
          },
          {"name_super_sub" : "Sales Expense",
          "routes" : "/admin/",
          "img" : 'special-offer.png'
          },
          {"name_super_sub" : "Commission Agents",
          "routes" : "/admin/",
          "img" : 'special-offer.png'
          },
          {"name_super_sub" : "Audit Logs",
          "routes" : "/admin/",
          "img" : 'special-offer.png'
          },
        ]
      },
      { "name" : "Production Management",
        "icon" : '',
        'mat_icons' :'query_stats',
        "id" : "Production_Manger",
        'super_manu' : [
          {"name_super_sub" : " Product Components",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : " Type Production Costs",
          "routes" : "/admin/productioncost",
          "img" : 'conveyor-belt.png'
          },
          {"name_super_sub" : "Production Cases",
          "routes" : "/admin/",
          "img" : 'factory.png'
          },
          {"name_super_sub" : "Compilation Item Orders",
          "routes" : "/admin/compilationitemorder",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Ungroup Compilation Items",
          "routes" : "/admin/ungroupcompilationitems",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Sort Item Orders",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Production Order Plans",
          "routes" : "/admin/productionorderplan",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Production Recives",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Distribution Expenses",
          "routes" : "/admin/distributionexpenses",
          "img" : 'marketing-mix.png'
          },
        ]
      },
      { "name" : "Production Reports",
        "icon" : 'ri-computer-fill',
        'mat_icons' : '',
        "id" : "Production_Report",
        'super_manu' : [
          {"name_super_sub" : "Product Components",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Report Product Components",
          "routes" : "/admin/productcomponentsreport",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Report Compilation | Ungroup Items",
          "routes" : "/admin/ungroupcompilationreport",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Report Sort Item Orders",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Report Production Plans",
          "routes" : "/admin/productionplansreport",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Report Production Orders",
          "routes" : "/admin/productionorderreport",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Report Production Recives",
          "routes" : "/admin/productionreceivesreport",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Report Production Expenses",
          "routes" : "/admin/reportproductionexpense",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Report Stage Production",
          "routes" : "/admin/stageproductionreport",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Report Lost Productions",
          "routes" : "/admin/lostproduct",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Report Possibility Productions",
          "routes" : "/admin/reportpossibilityproduction",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Report Production Costs",
          "routes" : "/admin/reportproductioncosts",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Report Variances Production Qualities ",
          "routes" : "/admin/variancesproductionqualitiesreport",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Report Audit Logs",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
        ]
      },
      { "name" : "Discount Management",
      "icon" : 'ri-creative-commons-nc-line',
      'mat_icons' : '',
      "id" : "Discount_Manger",
      'super_manu' : [
        {"name_super_sub" : "Discount",
        "routes" : "/admin/mdiscount",
        "img" : 'marketing-mix.png'
        },
        
        {"name_super_sub" : "Audit Logs",
        "routes" : "/admin/",
        "img" : 'marketing-mix.png'
        },
      ]
      },
      // { "name" : "Discount Report",
      // "icon" : 'ri-creative-commons-nc-line',
      // 'mat_icons' : '',
      // "id" : "Discount_Report",
      // 'super_manu' : []
      // },
      { "name" : "Expense Management",
        "icon" : 'ri-money-dollar-circle-line',
       
        'mat_icons' : '',
        "id" : "Expense_Manger",
        'super_manu' : [
          {"name_super_sub" : " Expense",
          "routes" : "/admin/expenses",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Category",
          "routes" : "/admin/expensescategory",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Audit Logs",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
        ]
      },
      { "name" : "Partner Management",
      "icon" : 'ri-vip-crown-2-line',
      'mat_icons' : '',
      "id" : "Partnership_Manger",
      'super_manu' : [
        {"name_super_sub" : "Partner",
        "routes" : "/admin/",
        "img" : 'marketing-mix.png'
        },
        {"name_super_sub" : "Profit & Loss Statement",
        "routes" : "/admin/",
        "img" : 'marketing-mix.png'
        },
        {"name_super_sub" : "Audit Logs",
        "routes" : "/admin/",
        "img" : 'marketing-mix.png'
        },
       
      ]
    },
      { "name" : "Inverstor Management",
      "icon" : 'ri-vip-crown-2-line',
      'mat_icons' : '',
      "id" : "Inverstor_Manger",
      'super_manu' : [
        {"name_super_sub" : "Investor",
        "routes" : "/admin/",
        "img" : 'marketing-mix.png'
        },
        {"name_super_sub" : "Profit & Loss Statement",
        "routes" : "/admin/",
        "img" : 'marketing-mix.png'
        },
        {"name_super_sub" : " Audit Logs",
        "routes" : "/admin/",
        "img" : 'marketing-mix.png'
        },
       
      ]
    },


  //   { "name" : "Investors Reports",
  //   "icon" : 'ri-vip-crown-2-line',
  //   'mat_icons' : '',
  //   "id" : "Inverstor_Manger",
  //   'super_manu' : [
  //     {"name_super_sub" : "Investors Reports",
  //     "routes" : "/admin/",
  //     "img" : 'marketing-mix.png'
  //     },
    
   
     
  //   ]
  // },
      // { "name" : "Expense Report",
      //   "icon" : '',
      //   'mat_icons' : 'dataset',
      //   "id" : "Expense_Report",
      //   'super_manu' : [
      //     {"name_super_sub" : "Report Expenses Summary",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Report Expenses Categories",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Report  Audit Logs",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //   ]
      // },


    { "name" : "E-Bill Management", 
    "icon" : '',
    'mat_icons' : 'gpp_maybe',
    "id" : "E-Bill_Manger", 
    'super_manu' : [
      {"name_super_sub" : "E-Bill Preparation",
      "routes" : "/admin/",
      "img" : 'marketing-mix.png'
      },
      {"name_super_sub" : "E-Bill Approval",
      "routes" : "/admin/",
      "img" : 'marketing-mix.png'
      },
      {"name_super_sub" : "Report ",
      "routes" : "/admin/",
      "img" : 'marketing-mix.png'
      },
      {"name_super_sub" : "Audit Logs ",
      "routes" : "/admin/",
      "img" : 'marketing-mix.png'
      },
    ]
  },
  //  { "name" : "E-Bill Report",
  //   "icon" : 'ri-creative-commons-by-line',
  //   'mat_icons' : '',
  //   "id" : "E-Bill_Report",
  //   'super_manu' : [
  //     {"name_super_sub" : "Print Report E-Bill",
  //     "routes" : "/admin/",
  //     "img" : 'marketing-mix.png'
  //     },
  //     {"name_super_sub" : "Report Audit Logs",
  //     "routes" : "/admin/",
  //     "img" : 'marketing-mix.png'
  //     },
  //   ]
  // },
        { "name" : "Account Management",
        "icon" : '',
        'mat_icons' : 'manage_accounts',
        "id" : "Accounting_Manger",
        'super_manu' : [
          {"name_super_sub" : "Fixed Assets Group",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Fixed Assest Data",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Journal Entries",
          "routes" : "/admin/journalentry",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Recipet Voucher Normal",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Recipet Voucher Assembled",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Payment Voucher Normal",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Payment Voucher Assembled",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Discount Vouchers",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Promissory Vouchers",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Bank Deposits",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Opening Balance Accounts",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Estimated Balance Accounts",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Chart Account Balances",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Debt Limit Accounts",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Analytical Chart",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Post All Documents",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : " Follow up Account Balances",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : " Maintenance Chart Accounts",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Aduit Logs",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
        ]
      },
       { "name" : "Account  Reports" ,
         "icon" : 'ri-coupon-5-line',
        'mat_icons' : '',
        "id" : "Accounting_Report" ,
        'super_manu' : [
          {"name_super_sub" : "Account Statements",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },

          {"name_super_sub" : "Account book",
          "img" : 'marketing-mix.png',
          "last_menu" : [
            { "name_super_sub_last" : "Sale Register",
              "routes" : "/admin/",
              "img" : 'marketing-mix.png'
           },
           { "name_super_sub_last" : "Purchase Register ",
            "routes" : "/admin/",
            "img" : 'marketing-mix.png'
           },
           { "name_super_sub_last" : "Bank Book",
           "routes" : "/admin/bankbook",
           "img" : 'marketing-mix.png'
            },
            { "name_super_sub_last" : "Cash Book",
            "routes" : "/admin/cashbook",
            "img" : 'marketing-mix.png'
             },
          ]
          },

          
          {"name_super_sub" : "Recipet Vouchers",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Payment Vouchers",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Discount Vouchers",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Promissory Vouchers",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Journal Entries",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Bank Deposits",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Fund & Bank Balances",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Balance Cost Centers",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },

          {"name_super_sub" : "Movement Cost Centers",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },

          {"name_super_sub" : "Fixed Assets",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          
          {"name_super_sub" : "Depreciation Fixed Assets",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Exclude Fixed Assets",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Receivable Accounts",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "General Ledger",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Auxiliary Ledger ",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Trading",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Profit & Loss",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Trial Balances",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Daily Movements ",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Movements VAT",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Aprroval VAT",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Balance Sheet",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : " Estimated Budget",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          // {"name_super_sub" : "Report Estimated Budget",
          // "routes" : "/admin/",
          // "img" : 'marketing-mix.png'
          // },
          {"name_super_sub" : "Financial Statements",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Audit Logs",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
         ]
      },


      //  { "name" : "Partnership Report",
      //   "icon" : 'ri-vip-line',
      //   'mat_icons' : '',
      //   "id" : "Partnership_Report",
      //   'super_manu' : [
      //     {"name_super_sub" : "Report Partners",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : " Report Partners Categories",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : " Partners Profits & Loss ",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Report Audit Logs ",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //   ]
      // },





      
      //   { "name" : "Retial POS Manger",
      //   "icon" : 'ri-presentation-fill',
      //   'mat_icons' : '',
      //   "id" : "Retial_POS_Manger",
      //   'super_manu' : [
      //     {"name_super_sub" : "Register System",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Orders & Returns",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Invoices",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Transactions",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Recurring Payments",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Refund",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Closeout",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Disputes",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Cash Logs",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Discounts",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Customers",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Rewards",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Promos",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Tips",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Feedback",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Employees",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Shifts",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Loenex web",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Auto Sales Texes",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Payroll",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Time Clock",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
       
      //   ]
      // },
      //   { "name" : "Retial POS Report",
      //   "icon" : 'ri-registered-line',
      //   'mat_icons' : '',
      //   "id" : "Retial_POS_Report",
      //   'super_manu' : [
      //     {"name_super_sub" : "Report Orders Pending",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Report Order Processing ",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Report Order Completed ",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Report  Order Delivered ",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Report Return Order  ",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Report Invoices",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Report Transactions",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Report Recurring Payments",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Report Refund",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },

      //     {"name_super_sub" : "Report Closeout",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Report Disputes",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Report Cash Logs",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Report Discounts",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Report Customers",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Report Rewards",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Report Promos",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Report Tips",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Report Feedback",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Report Employees",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Report Shifts",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : " Report Auto Sales Texes",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : " Report Time Clock",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Report Commission Agent",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //     {"name_super_sub" : "Report Movements || Aduit Logs",
      //     "routes" : "/admin/",
      //     "img" : 'marketing-mix.png'
      //     },
      //   ]
      // },
       { "name" : "LOENEX POS",
        "icon" : 'fa-solid fa-dumpster',
        'mat_icons' : '',
        "id" : "E-com_POS_Manger",
        'super_manu' : [
          {"name_super_sub" : "Finance",
        
          "img" : 'marketing-mix.png',
          "last_menu" : [
            { "name_super_sub_last" : " Net Sales",
              "routes" : "/admin/netsalesreport",
              "img" : 'marketing-mix.png'
           },
           { "name_super_sub_last" : "Net Purchase ",
            "routes" : "/admin/netpurchasereport",
            "img" : 'marketing-mix.png'
           },
           { "name_super_sub_last" : "Net Transfers",
          "routes" : "/admin/nettransferreport",
          "img" : 'marketing-mix.png'
           },
           { "name_super_sub_last" : "Net Expenses",
           "routes" : "/admin/netexpense",
           "img" : 'marketing-mix.png'
            },
            { "name_super_sub_last" : "Revenues",
            "routes" : "/admin/",
            "img" : 'marketing-mix.png'
             },
             { "name_super_sub_last" : "Reports",
             "routes" : "/admin/",
             "img" : 'marketing-mix.png'
              },
              { "name_super_sub_last" : "Partners Profits",
              "routes" : "/admin/",
              "img" : 'marketing-mix.png'
               },
          ]
          },
          {"name_super_sub" : "Register ",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : " Invoices ",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Prepare order",
          "routes" : "/admin/prepareorder",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Returns",
          "routes" : "/admin/returns",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Refund ",
          "routes" : "/admin/refund",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Transactions ",
          "routes" : "/admin/transactions",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Cash log ",
          "routes" : "/admin/cashlog",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : " Closeout ",
          "routes" : "/admin/closeout",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Discounts  ",
          "routes" : "/admin/discount",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Rewards ",
          "routes" : "/admin/rewards",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Shifts   ",
          "routes" : "/admin/shift",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Tips ",
          "routes" : "/admin/tips",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Reports ",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Loenex Web ",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Feedback ",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Plans ",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Audit Logs ",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
        ]
      },
      //   { "name" : "E-LOENEX POS Report",
      //   "icon" : 'fa-solid fa-dumpster-fire',
      //   'mat_icons' : '',
      //   "id" : "E-com_POS_Report",
      //   'super_manu' : []
      // },
       { "name" : "DINING POS",
        "icon" : 'ri-store-2-fill',
        'mat_icons' : '',
        "id" : "FSR_POS_Manger",
        'super_manu' : []
      },
      //   { "name" : " Dining POS Report",
      //   "icon" : 'ri-calendar-2-fill',
      //   'mat_icons' : '',
      //   "id" : "FSR_POS_Report",
      //   'super_manu' : []
      // },
       { "name" : "Website Management",
        "icon" : 'ri-window-2-fill',
        'mat_icons' : '',
        "id" : "Web_Site",
        'super_manu' : [
          {"name_super_sub" : "Online Store",
          "routes" : "/admin/onlinestore",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Pages",
          "img" : 'marketing-mix.png',
          "last_menu" : [
            { "name_super_sub_last" : "Website page",
              "routes" : "/admin/",
              "img" : 'marketing-mix.png'
           },
           { "name_super_sub_last" : "Career page ",
            "routes" : "/admin/",
            "img" : 'marketing-mix.png'
           },
           { "name_super_sub_last" : "Developers",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
           },
          ]
          },
          {"name_super_sub" : "Analytics",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : " Finnances",
        
          "img" : 'marketing-mix.png',
          "last_menu" : [
            { "name_super_sub_last" : "Net Sales",
              "routes" : "/admin/",
              "img" : 'marketing-mix.png'
           },
           { "name_super_sub_last" : "Net Purchase  ",
            "routes" : "/admin/",
            "img" : 'marketing-mix.png'
           },
           { "name_super_sub_last" : " Net Transfers ",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
           },
           { "name_super_sub_last" : " Net Expenses  ",
           "routes" : "/admin/",
           "img" : 'marketing-mix.png'
            },
            { "name_super_sub_last" : " Revenues ",
              "routes" : "/admin/",
              "img" : 'marketing-mix.png'
            },
            { "name_super_sub_last" : "Balance",
            "routes" : "/admin/",
            "img" : 'marketing-mix.png'
          },
          ]
          },
          {"name_super_sub" : " Orders",
           "img" : 'marketing-mix.png',
           "last_menu" : [
            { "name_super_sub_last" : "Pending ",
              "routes" : "/admin/pendingorder",
              "img" : 'marketing-mix.png'
           },
           { "name_super_sub_last" : "Approved  ",
            "routes" : "/admin/",
            "img" : 'marketing-mix.png'
           },
           { "name_super_sub_last" : "Ready TO ship ",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
           },
           { "name_super_sub_last" : "Canceled   ",
           "routes" : "/admin/cancelledorder",
           "img" : 'marketing-mix.png'
            },
            { "name_super_sub_last" : "Shipped ",
              "routes" : "/admin/ordershipped",
              "img" : 'marketing-mix.png'
            },
            { "name_super_sub_last" : "Delivered ",
            "routes" : "/admin/",
            "img" : 'marketing-mix.png'
            },
            { "name_super_sub_last" : " Undelivered ",
            "routes" : "/admin/",
            "img" : 'marketing-mix.png'
            
            },
            { "name_super_sub_last" : "Refund  ",
            "routes" : "/admin/",
            "img" : 'marketing-mix.png'
            },
            { "name_super_sub_last" : "Refund processing",
            "routes" : "/admin/",
            "img" : 'marketing-mix.png'
            },
          ]
          },
          {"name_super_sub" : " Manage Boxes",
          
          "img" : 'marketing-mix.png',
          "last_menu" : [
            { "name_super_sub_last" : "Add Box  ",
              "routes" : "/admin/addbox",
              "img" : 'marketing-mix.png'
           },
           { "name_super_sub_last" : "Scan Box  ",
            "routes" : "/admin/scanbox",
            "img" : 'marketing-mix.png'
           },
           { "name_super_sub_last" : "Return Package ",
            "routes" : "/admin/",
            "img" : 'marketing-mix.png'
           },
          ]
          },
          {"name_super_sub" : " Thems",
          // "routes" : "/admin/",
          "img" : 'marketing-mix.png',
          "last_menu" : [
            { "name_super_sub_last" : "Add Theme",
              "routes" : "/admin/",
              "img" : 'marketing-mix.png'
           },
           { "name_super_sub_last" : "Edit Theme  ",
            "routes" : "/admin/",
            "img" : 'marketing-mix.png'
           },
           { "name_super_sub_last" : "Upgrade Theme",
           "routes" : "/admin/",
           "img" : 'marketing-mix.png'
          },
      
          ]
          },
           {"name_super_sub" : " API Chancels",
          // "routes" : "/admin/",
          "img" : 'marketing-mix.png',
          "last_menu" : [
            { "name_super_sub_last" : " Amazon Account",
              "routes" : "/admin/",
              "img" : 'marketing-mix.png'
           },
           { "name_super_sub_last" : "Dropshipping  ",
            "routes" : "/admin/dropshipping",
            "img" : 'marketing-mix.png'
           },
           { "name_super_sub_last" : "Upgrade API",
           "routes" : "/admin/upgradeapi",
           "img" : 'marketing-mix.png'
          },
          ]
          },
          {"name_super_sub" : " Discounts ",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : " Rewards ",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : " Gift Cards ",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Ads & Posts",
          // "routes" : "/admin/",
          "img" : 'marketing-mix.png',
          "last_menu" : [
            { "name_super_sub_last" : "Posts",
              "routes" : "/admin/",
              "img" : 'marketing-mix.png'
           },
           { "name_super_sub_last" : " Ads   ",
            "routes" : "/admin/",
            "img" : 'marketing-mix.png'
           },
          ]
          },
          {"name_super_sub" : " Marketing",
          // "routes" : "/admin/",
          "img" : 'marketing-mix.png',
           "last_menu" : [
            { "name_super_sub_last" : "Campaigns",
              "routes" : "/admin/",
              "img" : 'marketing-mix.png'
           },
           { "name_super_sub_last" : "Reports ",
            "routes" : "/admin/",
            "img" : 'marketing-mix.png'
           },
          ]
          },
          {"name_super_sub" : "  Reviews ",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "  Subscribers  ",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Feedback  ",
          "routes" : "/admin/feedbackform",
          "img" : 'marketing-mix.png'
          },
           {"name_super_sub" : "Support   ",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : "Activity Logs   ",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
          {"name_super_sub" : " Plans",
          "routes" : "/admin/",
          "img" : 'marketing-mix.png'
          },
        ]
      },

      {  "name" : "Mobile App",
         "icon" : 'ri-smartphone-fill',
         'mat_icons' : '',
         "id" : "Mobile_App",
         'super_manu' : []
      },

    
    //  { "name" : "Scan Inventory",
    //     "icon" : 'ri-stack-fill',
    //     'mat_icons' : '',
    //     "id" : "Scan_Inventory",
    //     'super_manu' : []
    //   },
    //  { "name" : "Track Package & Manger",
    //     "icon" : 'ri-focus-3-line',
    //     'mat_icons' : '', 
    //     "id" : "Track_Package_&_Manger",
    //     'super_manu' : [
    //       {"name_super_sub" : "Add package",
    //       "routes" : "/admin/",
    //       "img" : 'marketing-mix.png'
    //       },
    //       {"name_super_sub" : "Scan Package",
    //       "routes" : "/admin/",
    //       "img" : 'marketing-mix.png'
    //       },
    //       {"name_super_sub" : "Scan Shipment Package",
    //       "routes" : "/admin/",
    //       "img" : 'marketing-mix.png'
    //       },
    //       {"name_super_sub" : "Shiped Orders",
    //       "routes" : "/admin/",
    //       "img" : 'marketing-mix.png'
    //       }, 
    //       {"name_super_sub" : "Unshipped orders",
    //       "routes" : "/admin/",
    //       "img" : 'marketing-mix.png'
    //       }, 
    //       {"name_super_sub" : "Return Order shipped",
    //       "routes" : "/admin/",
    //       "img" : 'marketing-mix.png'
    //       }, 
    //       {"name_super_sub" : "Return Order shipped",
    //       "routes" : "/admin/",
    //       "img" : 'marketing-mix.png'
    //       }, 
    //     ]
    //   },
   
    //    { "name" : "Track Package & Report",
    //     "icon" : 'ri-focus-3-line',
    //     'mat_icons' : '',
    //     "id" : "Track_Package_&_Report",
    //     'super_manu' : [
    //       {"name_super_sub" : "Report Add package",
    //       "routes" : "/admin/",
    //       "img" : 'marketing-mix.png'
    //       },
    //       {"name_super_sub" : "Report Scan Package",
    //       "routes" : "/admin/",
    //       "img" : 'marketing-mix.png'
    //       },
    //       {"name_super_sub" : "Report Scan Shipment Package",
    //       "routes" : "/admin/",
    //       "img" : 'marketing-mix.png'
    //       },
    //       {"name_super_sub" : "Report Shiped Orders",
    //       "routes" : "/admin/",
    //       "img" : 'marketing-mix.png'
    //       }, 
    //       {"name_super_sub" : "Report Unshipped orders",
    //       "routes" : "/admin/",
    //       "img" : 'marketing-mix.png'
    //       }, 
    //       {"name_super_sub" : "Report Return Order shipped",
    //       "routes" : "/admin/",
    //       "img" : 'marketing-mix.png'
    //       }, 
          
    //     ]
    //   }
    ],
  },
 
  {
    "Main_name" : "HRM Solutions",
       'main_icon' : 'ri-user-settings-line',
       'main_id'   : 'Hrm',
       'sub' : [],
  },
  {
    "Main_name" : "CRM Solutions",
       'main_icon' : 'ri-group-2-line',
       'main_id'   : 'Crm',
       'sub' : [],
  },
  {
    "Main_name" : "Payroll Solutions",
       'main_icon' : 'ri-chat-poll-fill',
       'main_id'   : 'Payroll',
       'sub' : [],
  },
  {
    "Main_name" : "Rewards Solutions",
       'main_icon' : 'bx bx-grid-alt',
       'main_id'   : 'Rewards',
       'sub' : [],

  },
  
  {
    "Main_name" : "Email Solutions",
       'main_icon' : 'ri-message-3-line',
       'main_id'   : 'E-mail',
       'sub' : [],

  },
  {
    "Main_name" : "Meeting Solutions",
       'main_icon' : 'ri-chat-smile-2-line',
       'main_id'   : 'Meeting',
       'sub' : [],

  },
  {
    "Main_name" : "Live Chat Solutions",
       'main_icon' : 'bx bx-grid-alt',
       'main_id'   : 'Chats',
       'sub' : [],

  },
  {
    "Main_name" : "Marketing  Solutions",
       'main_icon' : 'bx bx-grid-alt',
       'main_id'   : 'Marketing',
       'sub' : [],

  },
  {
    "Main_name" : "Gift Card Solutions",
       'main_icon' : 'bx bx-grid-alt',
       'main_id'   : 'Card System',
       'sub' : [],

  },
  // {
  //   "Main_name" : "Job Solution ",
  //      'main_icon' : 'bx bx-grid-alt',
  //      'main_id'   : 'Job System',
  //      'sub' : [],

  // },
  {
    "Main_name" : "Project Solutions",
       'main_icon' : 'ri-projector-line',
       'main_id'   : 'PMS',
       'sub' : [],
  },
  {
    "Main_name" : "Appointment Solutions ",
       'main_icon' : 'ri-ball-pen-fill',
       'main_id'   : 'Appointment',
       'sub' : [],
  },
  // {
  //   "Main_name" : "Hospital Solution ",
  //      'main_icon' : 'ri-hospital-line',
  //      'main_id'   : 'Hospital System',
  //      'sub' : [],

  // },


  {
    "Main_name" : "Payment Solutions",
       'main_icon' : 'ri-keyboard-box-line',
       'main_id'   : 'Pos',
       'sub' : [],
},
{
  "Main_name" : "Banking Solutions",
     'main_icon' : 'bx bx-grid-alt',
     'main_id'   : 'Exchange System',
     'sub' : [],

},


{
  "Main_name" : "API Integration Solutions",
     'main_icon' : 'bx bx-grid-alt',
     'main_id'   : 'API Integration',
     'sub' : [],

},
{
  "Main_name" : "Support ",
     'main_icon' : 'bx bx-grid-alt',
     'main_id'   : 'Support Team',
     'sub' : [],

},
{
  "Main_name" : "Plans",
     'main_icon' : 'bx bx-grid-alt',
     'main_id'   : 'Plans System',
     'sub' : [],

},
{
  "Main_name" : "Settings",
     'main_icon' : 'bx bx-grid-alt',
     'main_id'   : 'Support Team',
    
     'sub' : [{ "name" : "Product Management ",
     "icon" : 'ri-product-hunt-line',   
     'mat_icons' : '',
     'id' :  'Product_Manger',
'super_manu' :  [

 {"name_super_sub" : "Products",
 "routes" : "/admin/mene/product",
 "img" : 'new-product.png'
 } ,

 {  "name_super_sub" : "Departments ",
 "routes" : "/admin/department",
 "img" : 'network.png'
  },
 //  {  "name_super_sub" : "Tables ",
 //  "routes" : "/admin/department",
 //  "img" : 'dinner-table.png'
 //   },

 {"name_super_sub" : " Categories",
 "routes" : "/admin/product/categories",
 "img" : 'grid.png'
} ,
{"name_super_sub" : " Units",
"routes" : "/admin/unit",
"img" : 'teamwork.png'
} ,
 {"name_super_sub" : " Brands",
 "routes" : "/admin/product/brand",
 "img" : 'brand-image.png'
 } ,


 {"name_super_sub" : "Warranties",
  "routes" : "/admin/product/warranties",
  "img" : 'warranty.png'
 } ,
 // {"name_super_sub" : "Import Products",
 // "routes" : "/admin/product/importproduct",
 //  "img" : 'import.png'
 // } ,
 // {"name_super_sub" : " Export Product",
 // "routes" : "",
 // "img" : 'product.png'
 // } ,
 {"name_super_sub" : " Print Barcodes",
 "routes" : "",
 "img" : 'barcode-scanner.png'
 } ,
 {"name_super_sub" : "Audit Logs",
 "routes" : "/admin/product",
 "img" : 'audit.png'
 } ,
 
 
]},
{ "name" : "Supply Management",
"icon" : 'ri-store-3-line',
'mat_icons' : '',
'id' :  'Supply_Manger',
'super_manu' : [

 {"name_super_sub" : "Suppliers",
 "routes" : "/admin/supplier",
 "img" : 'supply-chain.png'
 } ,
 // {"name_super_sub" : "Supply Report",
 // "routes" : "/admin/product",
 // "img" : 'report.png'
 // } ,
 {"name_super_sub" : "Vendors ",
 "routes" : "/admin/vendor",
 "img" : 'vendor.png'
 } ,
 // {"name_super_sub" : "Vendor Report",
 // "routes" : "/admin/product",
 // "img" : 'development.png'
 // } ,
 {"name_super_sub" : "Customers",
 "routes" : "/admin/product",
 "img" : 'information.png'
 } ,
 // {"name_super_sub" : "Customers Report",
 // "routes" : "/admin/product",
 // "img" : 'consumer2.png'
 // } ,
 {"name_super_sub" : "Audit Logs",
 "routes" : "/admin/product",
 "img" : 'audit.png'
 } ,
]

},

{ "name" : "Sales Bouns Management",
"icon" : '',
'mat_icons' : 'report_gmailerrorred',
'id' :  'Stock_Manger',
'super_manu' : [
     {"name_super_sub" : "Commission",
     "routes" : "/admin/",
     "img" : 'balanced.png'
     },
   {"name_super_sub" : "Audit Logos",
   "routes" : "/admin/",
   "img" : 'balanced.png'
   },


]
},
{ "name" : "Employee Management",
"icon" : 'ri-store-3-line',
'mat_icons' : '',
'id' :  'Supply_Manger',
'super_manu' : [

{"name_super_sub" : "Users",
"routes" : "/admin/users",
"img" : 'supply-chain.png'
} ,
// {"name_super_sub" : "Supply Report",
// "routes" : "/admin/product",
// "img" : 'report.png'
// } ,
{"name_super_sub" : "Roles  ",
"routes" : "/admin/product",
"img" : 'vendor.png'
} ,
// {"name_super_sub" : "Vendor Report",
// "routes" : "/admin/product",
// "img" : 'development.png'
// } ,
{"name_super_sub" : " Permissions",
"routes" : "/admin/product",
"img" : 'information.png'
} ,
// {"name_super_sub" : "Customers Report",
// "routes" : "/admin/product",
// "img" : 'consumer2.png'
// } ,
{"name_super_sub" : "Audit Logs",
"routes" : "/admin/product",
"img" : 'audit.png'
} ,
]

},
{ "name" : "Inventory Management",
"icon" : '',
'mat_icons' : 'report_gmailerrorred',
'id' :  'Stock_Manger',
'super_manu' : [
       {"name_super_sub" : "Inventory Scanning",
       "routes" : "/admin/",
       "img" : 'balanced.png'
       },
     {"name_super_sub" : "Inventory Variances",
     "routes" : "/admin/",
     "img" : 'balanced.png'
     },

     {"name_super_sub" : "Modify Inventory ",
     "routes" : "/admin/",
     "img" : 'balanced.png'
     },
     {"name_super_sub" : "Storage Areas ",
     "routes" : "/admin/",
     "img" : 'balanced.png'
     },
     {"name_super_sub" : "Branch Transfers",
     "routes" : "/admin/",
     "img" : 'balanced.png'
     },
     {"name_super_sub" : "Branch Receivers ",
     "routes" : "/admin/",
     "img" : 'balanced.png'
     },
     {"name_super_sub" : "Transfers & Receivers",
     "routes" : "/admin/",
     "img" : 'balanced.png'
     },
     {"name_super_sub" : "Audit Logs",
     "routes" : "/admin/",
     "img" : 'balanced.png'
     },
]
},
{ "name" : "Inventory Reports",
"icon" : '',
'mat_icons' : 'report_gmailerrorred',
'id' :  'Stock_Report',
'super_manu' : [

{"name_super_sub" : "Inventory Scanning ",
"routes" : "/admin/inventoryscanningreport",
"img" : 'scan.png'
},
{"name_super_sub" : "Inventory Variances",
"routes" : "/admin/",
"img" : 'report-3.png'
},
{"name_super_sub" : "Modify Inventory",
"routes" : "/admin/",
"img" : 'stock-4.png'
},
{"name_super_sub" : "Storage Areas ",
"routes" : "/admin/",
"img" : 'audit-file.png'
},
{"name_super_sub" : " Branch Transfers",
"routes" : "/admin/",
"img" : 'allocation.png'
},
{"name_super_sub" : " Branch Receivers",
"routes" : "/admin/",
"img" : 'branch-3.png'
},
{"name_super_sub" : "Transfers &  Receivers",
"routes" : "/admin/",
"img" : 'branch-3.png'
},
{"name_super_sub" : "Opening Inventory",
"routes" : "/admin/",
"img" : 'warehouse.png'
},
{"name_super_sub" : "Closing Inventory",
"routes" : "/admin/",
"img" : 'not-available.png'
},
{"name_super_sub" : "Out of Stock ",
"routes" : "/admin/outofstockreport",
"img" : 'out-of-stock.png'
},
{"name_super_sub" : " Low Stock",
"routes" : "/admin/",
"img" : 'stock-market.png'
},
{"name_super_sub" : "Slow-Moving Inventory",
"routes" : "/admin/",
"img" : 'water.png'
},
{"name_super_sub" : "Expired Inventory",
"routes" : "/admin/",
"img" : 'dead-stock.png'
},
{"name_super_sub" : "Inventory Balance",
"routes" : "/admin/",
"img" : 'balance.png'
},

{"name_super_sub" : " Audit Logs",
"routes" : "/admin/",
"img" : 'audit-file.png'
},
]
},
{ "name" : "Purchase Management",
"icon" : 'ri-git-repository-private-line',
'mat_icons' : '',
"id" : "Purchase_Manger",
'super_manu' : [
// {"name_super_sub" : " Preparing Order",
// "routes" : "/admin/",
// "img" : 'order-listo.png'
// },
{"name_super_sub" : "Purchase Order",
"routes" : "/admin/purchaseorder",
"img" : 'order-listo.png'
},
{"name_super_sub" : "Purchase Invoice",
"routes" : "/admin/purchaseinvoice",
"img" : 'order-fulfillment.png'
},

{"name_super_sub" : "Return Purchase Invoice",
"routes" : "/admin/purchaseinvoice",
"img" : 'procurement.png'
},
]
},
{ "name" : "Purchase Reports", 
"icon" : 'ri-git-repository-private-fill',
'mat_icons' : '', 
"id" : "Purchase_Report",
'super_manu' : [
{"name_super_sub" : "Purchase Order Pending",
"routes" : "/admin/purchaseorderreport",
"img" : 'order-listo.png'
},
{"name_super_sub" : "Purchase Order",
"routes" : "/admin/",
"img" : 'order-listo.png'
},
{"name_super_sub" : "Outstanding Report",
"routes" : "/admin/outstadingreport",
"img" : 'order-listo.png'
},

{"name_super_sub" : "Purchase Invoice",
"routes" : "/admin/",
"img" : 'buy.png'
},
{"name_super_sub" : "Return Purchase Invoices",
"routes" : "/admin/",
"img" : 'return.png'
},
{"name_super_sub" : "Product Cost",
"routes" : "/admin/",
"img" : 'cost.png'
},
{"name_super_sub" : "Purchases Due Date",
"routes" : "/admin/",
"img" : 'productivity.png'
},
{"name_super_sub" : "Payment Purchase Invoices",
"routes" : "/admin/",
"img" : 'cash-on-delivery.png'
},
{"name_super_sub" : "Supplier Invoices",
"routes" : "/admin/",
"img" : 'cash-on-delivery.png'
},
{"name_super_sub" : "Purchase Expenses",
"routes" : "/admin/",
"img" : 'spending.png'
},
{"name_super_sub" : "Audit Logs",
"routes" : "/admin/",
"img" : 'audit-2.png'
},

]

},
{ "name" : "Sales Management",
"icon" : '',
'mat_icons' : 'insert_chart',
"id" : "Sales_Manger",
'super_manu' : [
{"name_super_sub" : "Quotation",
"routes" : "/admin/",
"img" : 'project-management.png'
},
{"name_super_sub" : "Preparation Order",
"routes" : "/admin/",
"img" : 'check-box.png'
},
{"name_super_sub" : "Sales Invoice",
"routes" : "/admin/",
"img" : 'point-of-sale.png'
},
// {"name_super_sub" : "Sales Invoice",
// "routes" : "/admin/",
// "img" : 'point-of-sale.png'
// },
{"name_super_sub" : "Return Sales Invoice",
"routes" : "/admin/",
"img" : 'money.png'
},
{"name_super_sub" : "Delivery Sales Invoice",
"routes" : "/admin/",
"img" : 'sales2.png'
},
// {"name_super_sub" : "Special Offer Sales",
// "routes" : "/admin/",
// "img" : 'ribbon.png'
// },
{"name_super_sub" : "Fund Inventory",
"routes" : "/admin/",
"img" : 'procurement3.png'
},
]
},
{ "name" : "Sales Reports", 
"icon" : '',
'mat_icons' : 'inventory',
"id" : "Sales_Report",
'super_manu' : [
{"name_super_sub" : "Quotation",
"routes" : "/admin/",
"img" : 'paper.png'
},
{"name_super_sub" : "Preparation Order",
"routes" : "/admin/",
"img" : 'online-order.png'
},
{"name_super_sub" : "Sales Invoice",
"routes" : "/admin/",
"img" : 'sale.png'
},
{"name_super_sub" : "Return Sales Invoices",
"routes" : "/admin/",
"img" : 'special-offer.png'
},
{"name_super_sub" : "Delivery Sales Invoices",
"routes" : "/admin/",
"img" : 'warehouse2.png'
},

{"name_super_sub" : "Payment Sales Invoices",
"routes" : "/admin/",
"img" : 'economy.png'
},
{"name_super_sub" : "Report Cash Sales",
"routes" : "/admin/",
"img" : 'economy4.png'
},
{"name_super_sub" : "Payment Sales Invoices",
"routes" : "/admin/",
"img" : 'special-offer.png'
},
{"name_super_sub" : " Newtwork Payment Sales ",
"routes" : "/admin/",
"img" : 'special-offer.png'
},
{"name_super_sub" : "Cash | Network Payments",
"routes" : "/admin/",
"img" : 'special-offer.png'
},
{"name_super_sub" : "Sales Invoice Due Date",
"routes" : "/admin/",
"img" : 'special-offer.png'
},
{"name_super_sub" : "Sales Invoice Profit",
"routes" : "/admin/",
"img" : 'special-offer.png'
},

{"name_super_sub" : "Sales & Revenue salesman",
"routes" : "/admin/",
"img" : 'special-offer.png'
},
{"name_super_sub" : "Commission Salesman",
"routes" : "/admin/",
"img" : 'special-offer.png'
},
{"name_super_sub" : "Customer Balance",
"routes" : "/admin/",
"img" : 'special-offer.png'
},
{"name_super_sub" : "Sales Expense",
"routes" : "/admin/",
"img" : 'special-offer.png'
},
{"name_super_sub" : "Commission Agents",
"routes" : "/admin/",
"img" : 'special-offer.png'
},
{"name_super_sub" : "Audit Logs",
"routes" : "/admin/",
"img" : 'special-offer.png'
},
]
},
{ "name" : "Production Management",
"icon" : '',
'mat_icons' :'query_stats',
"id" : "Production_Manger",
'super_manu' : [
{"name_super_sub" : " Product Components",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : " Type Production Costs",
"routes" : "/admin/productioncost",
"img" : 'conveyor-belt.png'
},
{"name_super_sub" : "Production Cases",
"routes" : "/admin/",
"img" : 'factory.png'
},
{"name_super_sub" : "Compilation Item Orders",
"routes" : "/admin/compilationitemorder",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Ungroup Compilation Items",
"routes" : "/admin/ungroupcompilationitems",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Sort Item Orders",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Production Order Plans",
"routes" : "/admin/productionorderplan",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Production Recives",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Distribution Expenses",
"routes" : "/admin/distributionexpenses",
"img" : 'marketing-mix.png'
},
]
},
{ "name" : "Production Reports",
"icon" : 'ri-computer-fill',
'mat_icons' : '',
"id" : "Production_Report",
'super_manu' : [
{"name_super_sub" : "Product Components",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Report Product Components",
"routes" : "/admin/productcomponentsreport",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Report Compilation | Ungroup Items",
"routes" : "/admin/ungroupcompilationreport",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Report Sort Item Orders",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Report Production Plans",
"routes" : "/admin/productionplansreport",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Report Production Orders",
"routes" : "/admin/productionorderreport",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Report Production Recives",
"routes" : "/admin/productionreceivesreport",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Report Production Expenses",
"routes" : "/admin/reportproductionexpense",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Report Stage Production",
"routes" : "/admin/stageproductionreport",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Report Lost Productions",
"routes" : "/admin/lostproduct",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Report Possibility Productions",
"routes" : "/admin/reportpossibilityproduction",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Report Production Costs",
"routes" : "/admin/reportproductioncosts",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Report Variances Production Qualities ",
"routes" : "/admin/variancesproductionqualitiesreport",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Report Audit Logs",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
]
},
{ "name" : "Discount Management",
"icon" : 'ri-creative-commons-nc-line',
'mat_icons' : '',
"id" : "Discount_Manger",
'super_manu' : [
{"name_super_sub" : "Discount",
"routes" : "/admin/mdiscount",
"img" : 'marketing-mix.png'
},

{"name_super_sub" : "Audit Logs",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
]
},
// { "name" : "Discount Report",
// "icon" : 'ri-creative-commons-nc-line',
// 'mat_icons' : '',
// "id" : "Discount_Report",
// 'super_manu' : []
// },
{ "name" : "Expense Management",
"icon" : 'ri-money-dollar-circle-line',

'mat_icons' : '',
"id" : "Expense_Manger",
'super_manu' : [
{"name_super_sub" : " Expense",
"routes" : "/admin/expenses",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Category",
"routes" : "/admin/expensescategory",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Audit Logs",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
]
},
{ "name" : "Partner Management",
"icon" : 'ri-vip-crown-2-line',
'mat_icons' : '',
"id" : "Partnership_Manger",
'super_manu' : [
{"name_super_sub" : "Partner",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Profit & Loss Statement",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Audit Logs",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},

]
},
{ "name" : "Inverstor Management",
"icon" : 'ri-vip-crown-2-line',
'mat_icons' : '',
"id" : "Inverstor_Manger",
'super_manu' : [
{"name_super_sub" : "Investor",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Profit & Loss Statement",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : " Audit Logs",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},

]
},


//   { "name" : "Investors Reports",
//   "icon" : 'ri-vip-crown-2-line',
//   'mat_icons' : '',
//   "id" : "Inverstor_Manger",
//   'super_manu' : [
//     {"name_super_sub" : "Investors Reports",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },



//   ]
// },
// { "name" : "Expense Report",
//   "icon" : '',
//   'mat_icons' : 'dataset',
//   "id" : "Expense_Report",
//   'super_manu' : [
//     {"name_super_sub" : "Report Expenses Summary",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Report Expenses Categories",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Report  Audit Logs",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//   ]
// },


{ "name" : "E-Bill Management", 
"icon" : '',
'mat_icons' : 'gpp_maybe',
"id" : "E-Bill_Manger", 
'super_manu' : [
{"name_super_sub" : "E-Bill Preparation",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "E-Bill Approval",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Report ",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Audit Logs ",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
]
},
//  { "name" : "E-Bill Report",
//   "icon" : 'ri-creative-commons-by-line',
//   'mat_icons' : '',
//   "id" : "E-Bill_Report",
//   'super_manu' : [
//     {"name_super_sub" : "Print Report E-Bill",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Report Audit Logs",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//   ]
// },
{ "name" : "Account Management",
"icon" : '',
'mat_icons' : 'manage_accounts',
"id" : "Accounting_Manger",
'super_manu' : [
{"name_super_sub" : "Fixed Assets Group",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Fixed Assest Data",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Journal Entries",
"routes" : "/admin/journalentry",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Recipet Voucher Normal",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Recipet Voucher Assembled",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Payment Voucher Normal",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Payment Voucher Assembled",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Discount Vouchers",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Promissory Vouchers",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Bank Deposits",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Opening Balance Accounts",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Estimated Balance Accounts",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Chart Account Balances",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Debt Limit Accounts",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Analytical Chart",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Post All Documents",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : " Follow up Account Balances",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : " Maintenance Chart Accounts",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Aduit Logs",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
]
},
{ "name" : "Account  Reports" ,
"icon" : 'ri-coupon-5-line',
'mat_icons' : '',
"id" : "Accounting_Report" ,
'super_manu' : [
{"name_super_sub" : "Account Statements",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Recipet Vouchers",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Payment Vouchers",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Discount Vouchers",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Promissory Vouchers",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Journal Entries",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Bank Deposits",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Fund & Bank Balances",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Balance Cost Centers",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},

{"name_super_sub" : "Movement Cost Centers",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},

{"name_super_sub" : "Fixed Assets",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},

{"name_super_sub" : "Depreciation Fixed Assets",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Exclude Fixed Assets",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Receivable Accounts",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "General Ledger",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Auxiliary Ledger ",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Trading",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Profit & Loss",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Trial Balances",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Daily Movements ",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Movements VAT",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Aprroval VAT",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Balance Sheet",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : " Estimated Budget",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
// {"name_super_sub" : "Report Estimated Budget",
// "routes" : "/admin/",
// "img" : 'marketing-mix.png'
// },
{"name_super_sub" : "Financial Statements",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Audit Logs",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
]
},


//  { "name" : "Partnership Report",
//   "icon" : 'ri-vip-line',
//   'mat_icons' : '',
//   "id" : "Partnership_Report",
//   'super_manu' : [
//     {"name_super_sub" : "Report Partners",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : " Report Partners Categories",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : " Partners Profits & Loss ",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Report Audit Logs ",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//   ]
// },






//   { "name" : "Retial POS Manger",
//   "icon" : 'ri-presentation-fill',
//   'mat_icons' : '',
//   "id" : "Retial_POS_Manger",
//   'super_manu' : [
//     {"name_super_sub" : "Register System",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Orders & Returns",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Invoices",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Transactions",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Recurring Payments",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Refund",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Closeout",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Disputes",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Cash Logs",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Discounts",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Customers",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Rewards",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Promos",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Tips",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Feedback",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Employees",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Shifts",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Loenex web",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Auto Sales Texes",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Payroll",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Time Clock",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },

//   ]
// },
//   { "name" : "Retial POS Report",
//   "icon" : 'ri-registered-line',
//   'mat_icons' : '',
//   "id" : "Retial_POS_Report",
//   'super_manu' : [
//     {"name_super_sub" : "Report Orders Pending",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Report Order Processing ",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Report Order Completed ",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Report  Order Delivered ",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Report Return Order  ",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Report Invoices",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Report Transactions",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Report Recurring Payments",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Report Refund",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },

//     {"name_super_sub" : "Report Closeout",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Report Disputes",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Report Cash Logs",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Report Discounts",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Report Customers",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Report Rewards",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Report Promos",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Report Tips",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Report Feedback",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Report Employees",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Report Shifts",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : " Report Auto Sales Texes",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : " Report Time Clock",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Report Commission Agent",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//     {"name_super_sub" : "Report Movements || Aduit Logs",
//     "routes" : "/admin/",
//     "img" : 'marketing-mix.png'
//     },
//   ]
// },
{ "name" : "LOENEX POS",
"icon" : 'fa-solid fa-dumpster',
'mat_icons' : '',
"id" : "E-com_POS_Manger",
'super_manu' : [
{"name_super_sub" : "Finance",

"img" : 'marketing-mix.png',
"last_menu" : [
 { "name_super_sub_last" : " Net Sales",
   "routes" : "/admin/netsalesreport",
   "img" : 'marketing-mix.png'
},
{ "name_super_sub_last" : "Net Purchase ",
 "routes" : "/admin/netpurchasereport",
 "img" : 'marketing-mix.png'
},
{ "name_super_sub_last" : "Net Transfers",
"routes" : "/admin/nettransferreport",
"img" : 'marketing-mix.png'
},
{ "name_super_sub_last" : "Net Expenses",
"routes" : "/admin/netexpense",
"img" : 'marketing-mix.png'
 },
 { "name_super_sub_last" : "Revenues",
 "routes" : "/admin/",
 "img" : 'marketing-mix.png'
  },
  { "name_super_sub_last" : "Reports",
  "routes" : "/admin/",
  "img" : 'marketing-mix.png'
   },
   { "name_super_sub_last" : "Partners Profits",
   "routes" : "/admin/",
   "img" : 'marketing-mix.png'
    },
]
},
{"name_super_sub" : "Register ",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : " Invoices ",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Prepare order",
"routes" : "/admin/prepareorder",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Returns",
"routes" : "/admin/returns",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Refund ",
"routes" : "/admin/refund",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Transactions ",
"routes" : "/admin/transactions",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Cash log ",
"routes" : "/admin/cashlog",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : " Closeout ",
"routes" : "/admin/closeout",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Discounts  ",
"routes" : "/admin/discount",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Rewards ",
"routes" : "/admin/rewards",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Shifts   ",
"routes" : "/admin/shift",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Tips ",
"routes" : "/admin/tips",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Reports ",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Loenex Web ",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Feedback ",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Plans ",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Audit Logs ",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
]
},
//   { "name" : "E-LOENEX POS Report",
//   "icon" : 'fa-solid fa-dumpster-fire',
//   'mat_icons' : '',
//   "id" : "E-com_POS_Report",
//   'super_manu' : []
// },
{ "name" : "DINING POS",
"icon" : 'ri-store-2-fill',
'mat_icons' : '',
"id" : "FSR_POS_Manger",
'super_manu' : []
},
//   { "name" : " Dining POS Report",
//   "icon" : 'ri-calendar-2-fill',
//   'mat_icons' : '',
//   "id" : "FSR_POS_Report",
//   'super_manu' : []
// },
{ "name" : "Website Management",
"icon" : 'ri-window-2-fill',
'mat_icons' : '',
"id" : "Web_Site",
'super_manu' : [
{"name_super_sub" : "Online Store",
"routes" : "/admin/onlinestore",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Pages",
"img" : 'marketing-mix.png',
"last_menu" : [
 { "name_super_sub_last" : "Website page",
   "routes" : "/admin/",
   "img" : 'marketing-mix.png'
},
{ "name_super_sub_last" : "Career page ",
 "routes" : "/admin/",
 "img" : 'marketing-mix.png'
},
{ "name_super_sub_last" : "Developers",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
]
},
{"name_super_sub" : "Analytics",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : " Finnances",

"img" : 'marketing-mix.png',
"last_menu" : [
 { "name_super_sub_last" : "Net Sales",
   "routes" : "/admin/",
   "img" : 'marketing-mix.png'
},
{ "name_super_sub_last" : "Net Purchase  ",
 "routes" : "/admin/",
 "img" : 'marketing-mix.png'
},
{ "name_super_sub_last" : " Net Transfers ",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{ "name_super_sub_last" : " Net Expenses  ",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
 },
 { "name_super_sub_last" : " Revenues ",
   "routes" : "/admin/",
   "img" : 'marketing-mix.png'
 },
 { "name_super_sub_last" : "Balance",
 "routes" : "/admin/",
 "img" : 'marketing-mix.png'
},
]
},
{"name_super_sub" : " Orders",
"img" : 'marketing-mix.png',
"last_menu" : [
 { "name_super_sub_last" : "Pending ",
   "routes" : "/admin/pendingorder",
   "img" : 'marketing-mix.png'
},
{ "name_super_sub_last" : "Approved  ",
 "routes" : "/admin/",
 "img" : 'marketing-mix.png'
},
{ "name_super_sub_last" : "Ready TO ship ",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{ "name_super_sub_last" : "Canceled   ",
"routes" : "/admin/cancelledorder",
"img" : 'marketing-mix.png'
 },
 { "name_super_sub_last" : "Shipped ",
   "routes" : "/admin/ordershipped",
   "img" : 'marketing-mix.png'
 },
 { "name_super_sub_last" : "Delivered ",
 "routes" : "/admin/",
 "img" : 'marketing-mix.png'
 },
 { "name_super_sub_last" : " Undelivered ",
 "routes" : "/admin/",
 "img" : 'marketing-mix.png'
 
 },
 { "name_super_sub_last" : "Refund  ",
 "routes" : "/admin/",
 "img" : 'marketing-mix.png'
 },
 { "name_super_sub_last" : "Refund processing",
 "routes" : "/admin/",
 "img" : 'marketing-mix.png'
 },
]
},
{"name_super_sub" : " Manage Boxes",

"img" : 'marketing-mix.png',
"last_menu" : [
 { "name_super_sub_last" : "Add Box  ",
   "routes" : "/admin/addbox",
   "img" : 'marketing-mix.png'
},
{ "name_super_sub_last" : "Scan Box  ",
 "routes" : "/admin/scanbox",
 "img" : 'marketing-mix.png'
},
{ "name_super_sub_last" : "Return Package ",
 "routes" : "/admin/",
 "img" : 'marketing-mix.png'
},
]
},
{"name_super_sub" : " Thems",
// "routes" : "/admin/",
"img" : 'marketing-mix.png',
"last_menu" : [
 { "name_super_sub_last" : "Add Theme",
   "routes" : "/admin/",
   "img" : 'marketing-mix.png'
},
{ "name_super_sub_last" : "Edit Theme  ",
 "routes" : "/admin/",
 "img" : 'marketing-mix.png'
},
{ "name_super_sub_last" : "Upgrade Theme",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},

]
},
{"name_super_sub" : " API Chancels",
// "routes" : "/admin/",
"img" : 'marketing-mix.png',
"last_menu" : [
 { "name_super_sub_last" : " Amazon Account",
   "routes" : "/admin/",
   "img" : 'marketing-mix.png'
},
{ "name_super_sub_last" : "Dropshipping  ",
 "routes" : "/admin/dropshipping",
 "img" : 'marketing-mix.png'
},
{ "name_super_sub_last" : "Upgrade API",
"routes" : "/admin/upgradeapi",
"img" : 'marketing-mix.png'
},
]
},
{"name_super_sub" : " Discounts ",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : " Rewards ",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : " Gift Cards ",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Ads & Posts",
// "routes" : "/admin/",
"img" : 'marketing-mix.png',
"last_menu" : [
 { "name_super_sub_last" : "Posts",
   "routes" : "/admin/",
   "img" : 'marketing-mix.png'
},
{ "name_super_sub_last" : " Ads   ",
 "routes" : "/admin/",
 "img" : 'marketing-mix.png'
},
]
},
{"name_super_sub" : " Marketing",
// "routes" : "/admin/",
"img" : 'marketing-mix.png',
"last_menu" : [
 { "name_super_sub_last" : "Campaigns",
   "routes" : "/admin/",
   "img" : 'marketing-mix.png'
},
{ "name_super_sub_last" : "Reports ",
 "routes" : "/admin/",
 "img" : 'marketing-mix.png'
},
]
},
{"name_super_sub" : "  Reviews ",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "  Subscribers  ",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Feedback  ",
"routes" : "/admin/feedbackform",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Support   ",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : "Activity Logs   ",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
{"name_super_sub" : " Plans",
"routes" : "/admin/",
"img" : 'marketing-mix.png'
},
]
},

{  "name" : "Mobile App",
"icon" : 'ri-smartphone-fill',
'mat_icons' : '',
"id" : "Mobile_App",
'super_manu' : []
},


//  { "name" : "Scan Inventory",
//     "icon" : 'ri-stack-fill',
//     'mat_icons' : '',
//     "id" : "Scan_Inventory",
//     'super_manu' : []
//   },
//  { "name" : "Track Package & Manger",
//     "icon" : 'ri-focus-3-line',
//     'mat_icons' : '', 
//     "id" : "Track_Package_&_Manger",
//     'super_manu' : [
//       {"name_super_sub" : "Add package",
//       "routes" : "/admin/",
//       "img" : 'marketing-mix.png'
//       },
//       {"name_super_sub" : "Scan Package",
//       "routes" : "/admin/",
//       "img" : 'marketing-mix.png'
//       },
//       {"name_super_sub" : "Scan Shipment Package",
//       "routes" : "/admin/",
//       "img" : 'marketing-mix.png'
//       },
//       {"name_super_sub" : "Shiped Orders",
//       "routes" : "/admin/",
//       "img" : 'marketing-mix.png'
//       }, 
//       {"name_super_sub" : "Unshipped orders",
//       "routes" : "/admin/",
//       "img" : 'marketing-mix.png'
//       }, 
//       {"name_super_sub" : "Return Order shipped",
//       "routes" : "/admin/",
//       "img" : 'marketing-mix.png'
//       }, 
//       {"name_super_sub" : "Return Order shipped",
//       "routes" : "/admin/",
//       "img" : 'marketing-mix.png'
//       }, 
//     ]
//   },

//    { "name" : "Track Package & Report",
//     "icon" : 'ri-focus-3-line',
//     'mat_icons' : '',
//     "id" : "Track_Package_&_Report",
//     'super_manu' : [
//       {"name_super_sub" : "Report Add package",
//       "routes" : "/admin/",
//       "img" : 'marketing-mix.png'
//       },
//       {"name_super_sub" : "Report Scan Package",
//       "routes" : "/admin/",
//       "img" : 'marketing-mix.png'
//       },
//       {"name_super_sub" : "Report Scan Shipment Package",
//       "routes" : "/admin/",
//       "img" : 'marketing-mix.png'
//       },
//       {"name_super_sub" : "Report Shiped Orders",
//       "routes" : "/admin/",
//       "img" : 'marketing-mix.png'
//       }, 
//       {"name_super_sub" : "Report Unshipped orders",
//       "routes" : "/admin/",
//       "img" : 'marketing-mix.png'
//       }, 
//       {"name_super_sub" : "Report Return Order shipped",
//       "routes" : "/admin/",
//       "img" : 'marketing-mix.png'
//       }, 

//     ]
//   }
],


},
];


export const settings = [
 

  

]
