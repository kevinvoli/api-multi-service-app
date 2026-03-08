import {
  Controller, Get, Post, Patch, Body, Param, Query, ParseIntPipe,
} from '@nestjs/common';
import { AdminPanelService } from './admin-panel.service';


@Controller('admin')
export class AdminPanelController {
  constructor(private readonly adminPanelService: AdminPanelService) {}

  // ─── Dashboard ───────────────────────────────────────────────────────────────

  /** GET /admin/dashboard — Statistiques globales */
  @Get('dashboard')
  getDashboardStats() {
    return this.adminPanelService.getDashboardStats();
  }

  // ─── Riders ──────────────────────────────────────────────────────────────────

  /** GET /admin/riders?page=&limit=&search=&status= */
  @Get('riders')
  listRiders(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('search') search?: string,
    @Query('status') status?: string,
  ) {
    return this.adminPanelService.listRiders(
      page ? parseInt(page, 10) : 1,
      limit ? parseInt(limit, 10) : 20,
      search,
      status,
    );
  }

  /** PATCH /admin/riders/:id/status */
  @Patch('riders/:id/status')
  updateRiderStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status') status: 'Active' | 'Inactive' | 'Deleted',
  ) {
    return this.adminPanelService.updateRiderStatus(id, status);
  }

  // ─── Drivers ─────────────────────────────────────────────────────────────────

  /** GET /admin/drivers?page=&limit=&search=&status=&companyId= */
  @Get('drivers')
  listDrivers(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('search') search?: string,
    @Query('status') status?: string,
    @Query('companyId') companyId?: string,
  ) {
    return this.adminPanelService.listDrivers(
      page ? parseInt(page, 10) : 1,
      limit ? parseInt(limit, 10) : 20,
      search,
      status,
      companyId ? parseInt(companyId, 10) : undefined,
    );
  }

  /** PATCH /admin/drivers/:id/status */
  @Patch('drivers/:id/status')
  updateDriverStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status') status: 'active' | 'inactive' | 'Deleted' | 'Suspend',
  ) {
    return this.adminPanelService.updateDriverStatus(id, status);
  }

  // ─── Companies ───────────────────────────────────────────────────────────────

  /** GET /admin/companies?page=&limit=&search=&status= */
  @Get('companies')
  listCompanies(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('search') search?: string,
    @Query('status') status?: string,
  ) {
    return this.adminPanelService.listCompanies(
      page ? parseInt(page, 10) : 1,
      limit ? parseInt(limit, 10) : 20,
      search,
      status,
    );
  }

  /** PATCH /admin/companies/:id/status */
  @Patch('companies/:id/status')
  updateCompanyStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status') status: 'Active' | 'Inactive' | 'Deleted',
  ) {
    return this.adminPanelService.updateCompanyStatus(id, status);
  }

  // ─── Commandes Restaurant ────────────────────────────────────────────────────

  /** GET /admin/orders?page=&limit=&companyId=&statusCode= */
  @Get('orders')
  listOrders(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('companyId') companyId?: string,
    @Query('statusCode') statusCode?: string,
  ) {
    return this.adminPanelService.listOrders(
      page ? parseInt(page, 10) : 1,
      limit ? parseInt(limit, 10) : 20,
      companyId ? parseInt(companyId, 10) : undefined,
      statusCode ? parseInt(statusCode, 10) : undefined,
    );
  }

  /** PATCH /admin/orders/:id/status */
  @Patch('orders/:id/status')
  updateOrderStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('statusCode', ParseIntPipe) statusCode: number,
  ) {
    return this.adminPanelService.updateOrderStatus(id, statusCode);
  }

  // ─── Trips Transport ─────────────────────────────────────────────────────────

  /** GET /admin/trips?page=&limit=&status=&companyId= */
  @Get('trips')
  listTrips(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('status') status?: string,
    @Query('companyId') companyId?: string,
  ) {
    return this.adminPanelService.listTrips(
      page ? parseInt(page, 10) : 1,
      limit ? parseInt(limit, 10) : 20,
      status,
      companyId ? parseInt(companyId, 10) : undefined,
    );
  }

  // ─── Administrateurs ─────────────────────────────────────────────────────────

  /** GET /admin/admins */
  @Get('admins')
  listAdmins() {
    return this.adminPanelService.listAdmins();
  }

  /** POST /admin/admins */
  @Post('admins')
  createAdmin(
    @Body() body: {
      vFirstName: string;
      vLastName: string;
      vEmail: string;
      password: string;
      iGroupId?: number;
    },
  ) {
    return this.adminPanelService.createAdmin(body);
  }

  /** PATCH /admin/admins/:id/status */
  @Patch('admins/:id/status')
  updateAdminStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status') status: 'Active' | 'Inactive' | 'Deleted',
  ) {
    return this.adminPanelService.updateAdminStatus(id, status);
  }

  // ─── Détails Rider / Driver ───────────────────────────────────────────────────

  /** GET /admin/riders/search?phone=&phoneCode= */
  @Get('riders/search')
  searchRider(
    @Query('phone') phone: string,
    @Query('phoneCode') phoneCode?: string,
  ) {
    return this.adminPanelService.searchRiderByPhone(phone, phoneCode);
  }

  /** GET /admin/riders/:id */
  @Get('riders/:id')
  getRiderDetail(@Param('id', ParseIntPipe) id: number) {
    return this.adminPanelService.getRiderDetail(id);
  }

  /** GET /admin/drivers/by-company?companyId= */
  @Get('drivers/by-company')
  getDriversByCompany(@Query('companyId', ParseIntPipe) companyId: number) {
    return this.adminPanelService.getDriversByCompany(companyId);
  }

  /** GET /admin/drivers/:id */
  @Get('drivers/:id')
  getDriverDetail(@Param('id', ParseIntPipe) id: number) {
    return this.adminPanelService.getDriverDetail(id);
  }

  // ─── Réservations ────────────────────────────────────────────────────────────

  /** PATCH /admin/bookings/:id/assign-driver */
  @Patch('bookings/:id/assign-driver')
  assignDriver(
    @Param('id', ParseIntPipe) id: number,
    @Body('driverId', ParseIntPipe) driverId: number,
  ) {
    return this.adminPanelService.assignDriverToBooking(id, driverId);
  }

  // ─── Documents ───────────────────────────────────────────────────────────────

  /** PATCH /admin/drivers/docs/approve */
  @Patch('drivers/docs/approve')
  approveDocs(@Body('docIds') docIds: number[]) {
    return this.adminPanelService.approveDriverDocs(docIds);
  }

  // ─── Charts Dashboard ────────────────────────────────────────────────────────

  /** GET /admin/dashboard/charts?type=earnings|trips&year=2025&months=6 */
  @Get('dashboard/charts')
  getDashboardCharts(
    @Query('type') type: 'earnings' | 'trips' = 'earnings',
    @Query('year') year?: string,
    @Query('months') months?: string,
  ) {
    return this.adminPanelService.getDashboardCharts(
      type,
      year ? parseInt(year, 10) : new Date().getFullYear(),
      months ? parseInt(months, 10) : 6,
    );
  }

  // ─── Wallet ──────────────────────────────────────────────────────────────────

  /** GET /admin/users/:id/wallet?userType=Driver|Rider */
  @Get('users/:id/wallet')
  getWallet(
    @Param('id', ParseIntPipe) id: number,
    @Query('userType') userType: 'Driver' | 'Rider' = 'Driver',
  ) {
    return this.adminPanelService.getUserWalletBalance(id, userType);
  }

  // ─── Coupon ──────────────────────────────────────────────────────────────────

  /** GET /admin/coupons/check?code= */
  @Get('coupons/check')
  checkCoupon(@Query('code') code: string) {
    return this.adminPanelService.checkCouponCode(code);
  }
}
