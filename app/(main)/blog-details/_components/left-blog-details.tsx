import CalendarBlankIcon from "@/assets/CalendarBlank.svg";
import ClockIcon from "@/assets/Clock.svg";
import Factors5S from "@/assets/images/Factors5S.png";
import ImplementationStep5S from "@/assets/images/ImplementationStep5S.png";
import FOSO_Logo_Pattern from "@/assets/images/Logo_Pattern.png";
import Procedure5S from "@/assets/images/Procedure5S.png";
import Process5SBg from "@/assets/images/Process_5S_Bg.png";
import WhyChoose5S from "@/assets/images/WhyChoose5S.png";
import QuoteLeftIcon from "@/assets/QuoteLeft.svg";
import Image from "next/image";
import ReactionGroup from "./reaction-group";

interface LeftBlogDetailsProps {
  sections: Record<string, React.RefObject<HTMLParagraphElement>>;
}
const LeftBlogDetails = ({ sections }: Readonly<LeftBlogDetailsProps>) => {
  return (
    <div className="max-w-[900px] md:pr-6">
      <div className="grid gap-6">
        <div className="grid gap-4">
          <div className="w-fit rounded-lg bg-white-200 px-2 py-1 text-xs leading-1.5">
            <p className="text-blue-500">Quản Lý Sản Xuất</p>
          </div>
          <p className="text-2xl font-extrabold capitalize leading-none md:text-4xl">
            Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết
          </p>

          <div className="top-2 flex flex-col items-center justify-between md:flex-row">
            <div className="flex items-center gap-2.5">
              <div className="flex size-16 items-center justify-center">
                <Image src={FOSO_Logo_Pattern} alt="FOSO_Logo" />
              </div>
              <div className="leading-1.5">
                <p className="text-sm font-medium text-gray-500">Tác giả</p>
                <p className="text-base font-bold text-gray-300">FOSO Creator</p>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-6">
              <div className="flex items-center gap-2">
                <Image src={CalendarBlankIcon} alt="CalendarBlankIcon" className="size-5 md:size-auto" />
                <p className="text-xs leading-1.5 text-gray-500 md:text-base">Cập nhật vào: 17/11/2022</p>
              </div>

              <div className=" h-6 w-px border border-gray-100"></div>

              <div className="flex items-center gap-2">
                <Image src={ClockIcon} alt="ClockIcon" className="size-5 md:size-auto" />
                <p className="text-xs leading-1.5 text-gray-500 md:text-base">10 phút đọc</p>
              </div>
            </div>
          </div>

          <div>
            <Image src={Process5SBg} alt="Process5SBg" />
            <p className=" pt-2 text-center text-base font-normal leading-1.5 text-gray-500">
              Quy trình 5s là gì?
            </p>
          </div>

          <div className=" relative w-full px-4 pb-2 pt-3 text-center">
            <Image src={QuoteLeftIcon} alt="QuoteLeftIcon" className=" absolute top-[-14px]" />
            <p className="mx-auto max-w-[778px] text-lg font-medium italic leading-6 text-gray-300 md:text-xl">
              Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây dựng 5S cần yếu tố gì? Bài
              viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này cũng như yếu tố tạo
              nên thành công của quy trình bạn nhé.
            </p>
          </div>

          <div className="grid gap-5 text-sm text-black-300 md:text-base">
            <p ref={sections.s1} className=" text-xl font-extrabold leading-1.5 text-turquoise-300">
              1. Quy trình 5S là gì?
            </p>
            <p>
              Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản xuất. Nguồn gốc của quy trình
              5S là đến từ xứ sở hoa anh đào Nhật Bản.
            </p>
            <p>
              Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi tính hiệu quả mà 5S
              mang lại. Quy trình này bao gồm 5 chữ S đầu trong tiếng Nhật:
            </p>
            <ul className="list-disc space-y-2 pl-5 marker:text-turquoise-300">
              <li>
                <span className="font-bold text-turquoise-300">Seiri</span> (Ngăn nắp)
              </li>
              <li>
                <span className="font-bold text-turquoise-300">Seiso</span> (Sạch sẽ)
              </li>
              <li>
                <span className="font-bold text-turquoise-300">Seiton</span> (Trật tự)
              </li>
              <li>
                <span className="font-bold text-turquoise-300">Shitsuke</span> (Kỷ luật)
              </li>
              <li>
                <span className="font-bold text-turquoise-300">Seiketsu</span> (Tiêu chuẩn hóa)
              </li>
            </ul>

            <p ref={sections.s2} className=" text-xl font-extrabold leading-1.5 text-turquoise-300">
              2. Lợi ích quy trình 5S đem lại
            </p>

            <p>
              Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước của quy trình với mục
              đích cải tiến môi trường làm việc của doanh nghiệp.
            </p>
            <p>
              Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ tạo nên một môi trường
              được sắp xếp theo nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ
              được đặt theo vị trí quy định và dễ dàng tìm kiếm khi cần thiết.
            </p>

            <p>
              Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen tốt cho mỗi nhân viên. Và
              từ đó, cũng góp phần vào tạo nên một văn hóa doanh nghiệp tích cực.
            </p>
          </div>

          <div>
            <Image src={WhyChoose5S} alt="WhyChoose5S" />
            <p className=" pt-2 text-center text-sm font-normal leading-1.5 text-gray-500 md:text-base">
              Tại sao doanh nghiệp cần quy trình 5S?
            </p>
          </div>

          <div className="grid gap-5 text-sm text-black-300 md:text-base">
            <p ref={sections.s3} className=" text-xl font-extrabold leading-1.5 text-turquoise-300">
              3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
            </p>

            <p>
              Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả
              Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý
              do vì sao bạn nên lựa chọn quy trình:
            </p>

            <div>
              <p ref={sections.s31} className="font-bold text-turquoise-300">
                3.1 Cải thiện rõ nét môi trường làm việc
              </p>
              <p>
                Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn.
                Điều này tạo ra một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp
              </p>
            </div>

            <div>
              <p ref={sections.s32} className="font-bold text-turquoise-300">
                3.2 Tiết kiệm thời gian đáng kể
              </p>
              <p>
                Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn
                mất nhiều thời gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi
                thứ đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng. 
              </p>
            </div>

            <div>
              <p ref={sections.s33} className="font-bold text-turquoise-300">
                3.3 Tăng năng suất làm việc
              </p>
              <p>
                Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ
                sinh, nhân viên có thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp
                tiết kiệm thời gian và tăng năng suất làm việc.
              </p>
            </div>

            <div>
              <p ref={sections.s34} className="font-bold text-turquoise-300">
                3.4 Tiết kiệm chi phí
              </p>
              <p>
                Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả
                hơn, doanh nghiệp có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.
              </p>
            </div>

            <div>
              <p ref={sections.s35} className="font-bold text-turquoise-300">
                3.5 Tăng chất lượng sản phẩm
              </p>
              <p>
                5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất
                lượng sản phẩm và giảm thiểu lỗi sản xuất không mong muốn
              </p>
            </div>
          </div>

          <div>
            <Image src={Procedure5S} alt="Procedure5S" />
            <p className=" pt-2 text-center text-sm font-normal leading-1.5 text-gray-500 md:text-base">
              Quy trình 5S gồm các bước
            </p>
          </div>

          <div className="grid gap-5 text-sm text-black-300 md:text-base">
            <p ref={sections.s4} className=" text-xl font-extrabold leading-1.5 text-turquoise-300">
              4. Quy trình 5S gồm các bước
            </p>

            <p>
              5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả làm việc trong một tổ chức
              hoặc doanh nghiệp. 5S bao gồm năm bước cơ bản sau:
            </p>

            <div>
              <p ref={sections.s41} className="font-bold text-turquoise-300">
                4.1 Seiri (Ngăn nắp)
              </p>
              <p>
                Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những
                thứ dư thừa, không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm
                thời gian
              </p>
            </div>

            <div>
              <p ref={sections.s42} className="font-bold text-turquoise-300">
                4.2 Seiton (Sắp xếp)
              </p>
              <p>
                Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp
                một cách gọn gàng để giúp tìm kiếm và sử dụng chúng một cách dễ dàng.
              </p>
            </div>

            <div>
              <p ref={sections.s43} className="font-bold text-turquoise-300">
                4.3 Seiso (Vệ sinh)
              </p>
              <p>
                Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho
                môi trường làm việc luôn sạch sẽ. Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự
                lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi nhân viên.
              </p>
            </div>

            <div>
              <p ref={sections.s44} className="font-bold text-turquoise-300">
                4.4 Seiketsu (Tiêu chuẩn hóa)
              </p>
              <p>
                Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn
                về sự sạch sẽ, gọn gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu
              </p>
            </div>

            <div>
              <p ref={sections.s45} className="font-bold text-turquoise-300">
                4.5 Shitsuke (Kỷ luật)
              </p>
              <p>
                Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy
                trì tính hiệu quả của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ
                luật và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức duy trì và tuân thủ theo quy
                trình.
              </p>
            </div>
          </div>

          <div>
            <Image src={ImplementationStep5S} alt="ImplementationStep5S" />
            <p className=" pt-2 text-center text-sm font-normal leading-1.5 text-gray-500 md:text-base">
              Các bước thực hiện quy trình 5s
            </p>
          </div>

          <div className="grid gap-5 text-sm text-black-300 md:text-base">
            <p ref={sections.s5} className=" text-xl font-extrabold leading-1.5 text-turquoise-300">
              5. Quy trình được thực hiện như sau:
            </p>

            <p>
              Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả
              Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý
              do vì sao bạn nên lựa chọn quy trình:
            </p>

            <div>
              <p ref={sections.s51} className="font-bold text-turquoise-300">
                5.1 Giai đoạn chuẩn bị
              </p>
              <p>
                Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều hành và quản lý quá
                trình thực hiện quy trình 5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S
                sẽ hiệu quả hơn.
              </p>
            </div>

            <div>
              <p ref={sections.s52} className="font-bold text-turquoise-300">
                5.2 Triển khai rộng rãi
              </p>
              <p>
                Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người
                trong doanh nghiệp nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của
                bạn.
              </p>
            </div>

            <div>
              <p ref={sections.s53} className="font-bold text-turquoise-300">
                5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp
              </p>
              <p>
                Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp
                nên tuyên truyền tích cực và tạo không khí hào hứng cho từng cá nhân.
              </p>
            </div>

            <div>
              <p ref={sections.s54} className="font-bold text-turquoise-300">
                5.4 Sàng lọc, sắp xếp và đánh giá
              </p>
              <p>
                Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp
                cần đưa ra tiêu chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu
                quả hơn và dễ dàng tìm kiếm sau này.
              </p>
            </div>

            <div>
              <p ref={sections.s55} className="font-bold text-turquoise-300">
                5.5 Đánh giá
              </p>
              <p>
                Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải tiến và xem xét cần
                cải tiến phương diện nào hay không trong quá trình thực hiện quy trình 5S.
              </p>
            </div>
          </div>

          <div className="grid gap-5 text-sm text-black-300 md:text-base">
            <p ref={sections.s6} className=" text-xl font-extrabold leading-1.5 text-turquoise-300">
              6. Quy trình 5S có giống với Kaizen?
            </p>

            <p>
              Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen
              là 2 khái niệm khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.
            </p>
          </div>

          <div className=" border-l-[3px] border-solid border-turquoise-300 pb-2 pl-9 pr-4 pt-3">
            <p className=" text-base font-medium italic md:text-xl">
              Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung
              vào việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc.
            </p>
          </div>

          <div className=" border-l-[3px] border-solid border-turquoise-300 pb-2 pl-9 pr-4 pt-3">
            <p className=" text-base font-medium italic md:text-xl">
              Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung
              vào việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc.
            </p>
          </div>

          <p className="text-sm font-medium leading-1.5 md:text-base">
            Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng
            trong việc tạo ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước
            đầu tiên trong quá trình cải tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc
            cho các hoạt động cải tiến tiếp theo.
          </p>

          <div className="grid gap-5 text-sm text-black-300 md:text-base">
            <p ref={sections.s7} className=" text-xl font-extrabold leading-1.5 text-turquoise-300">
              7. Đối tượng nào nên áp dụng 5S?
            </p>

            <p>
              Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và
              các loại doanh nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất,
              các cơ quan hành chính, các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ.
            </p>

            <p>
              Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật
              dụng phải được quản lý và sử dụng hiệu quả.
            </p>
          </div>

          <div>
            <Image src={Factors5S} alt="Factors5S" />
            <p className=" pt-2 text-center text-sm font-normal leading-1.5 text-gray-500 md:text-base">
              Các yếu tố tạo nên thành công cho quy trình 5S
            </p>
          </div>

          <div className="grid gap-5 text-sm text-black-300 md:text-base">
            <p ref={sections.s8} className=" text-xl font-extrabold leading-1.5 text-turquoise-300">
              8. Các yếu tố tạo nên thành công cho quy trình 5S
            </p>

            <p>
              Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm
              việc của doanh nghiệp đó là từ phía:
            </p>

            <ul className="list-disc space-y-2 pl-5 marker:text-black-200">
              <li>
                Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất
                để quyết định doanh nghiệp có áp dụng quy tắc này hay không.
              </li>
              <li>
                Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ
                phận đưa lên ý tưởng, kế hoạch thực hiện triển khai 5S.
              </li>
              <li>
                Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân
                viên tự nguyện thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.
              </li>
            </ul>

            <p>
              Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh
              nghiệp cần nắm bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và
              với những thông tin bổ ích như trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát
              triển, cải tiến vượt bậc trong tương lai.
            </p>
          </div>

          <div className="my-2 md:py-12">
            <div
              className="grid items-center justify-center gap-6 rounded-6 py-6"
              style={{
                boxShadow: "0px 1px 2px 0px rgba(18, 18, 23, 0.06), 0px 1px 3px 0px rgba(18, 18, 23, 0.10)",
              }}
            >
              <div className="text-center leading-1.5 text-gray-300">
                <p className=" text-xl font-extrabold">Bạn thấy bài viết như thế nào?</p>
                <p className=" text-base font-medium">4 phản hồi</p>
              </div>

              <ReactionGroup />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBlogDetails;
