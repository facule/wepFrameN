<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0">
    <title> Autocomplete Place Write </title>
</head>
<body>
<div id="wrapper">
        클래스 등록이 완료되었습니다!

<%
        request.setCharacterEncoding("UTF-8");
        String lat = request.getParameter("latclick");  
        String lng = request.getParameter("lngclick");
        String paddress = request.getParameter("paddress");
        String pname = request.getParameter("pname");

        Connection con = null;
        Statement stmt = null;

         //콘솔 출력 테스트 차례대로 위도, 경도, 주소, 장소명
        System.out.println(lat);
        System.out.println(lng);
        System.out.println(paddress);
        System.out.println(pname);

        try {
        System.out.println("드라이버 로드 성공 !");
        String url = "jdbc:mysql://(DB 아이피)/(DB 테이블)?allowPublicKeyRetrieval=true&useSSL=false&useUnicode=true&characterEncoding=UTF-8";
        String id = "root";
        String pass = "hstackdbadmin";
        con = DriverManager.getConnection(url, id, pass);
        System.out.println(con.toString());
        System.out.println("JDBC Connector 연결 성공 !");

        String sql = "insert into (DB 테이블) (칼럼명1, 칼럼명2, 칼럼명3, 칼럼명4) values (lat, lng, paddress, pname);

        stmt = con.createStatement();
        System.out.println("SQLServerStatement 개체 생성 !");
        stmt.executeUpdate(sql);
                } catch(SQLException e) {
                    System.out.println("SQLException : " + e.getMessage());
                } finally {
                    if(stmt != null) {
                        try {
                            stmt.close();
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                    if(con != null) {
                        try {
                            con.close();
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                }
        %>
</div>
</body>
</html>