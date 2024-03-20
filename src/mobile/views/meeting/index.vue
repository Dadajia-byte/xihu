 <template>
    <div class="container">
        <div class="title">大会议程</div>
        <el-form>
            <el-form-item >
                <div class="search">
                    <el-input placeholder="请输入会议名称进行搜索">
                        <template #suffix>
                            <el-icon><Search></Search></el-icon>
                        </template>
                    </el-input>
                </div>

                
            </el-form-item>
            <div>
            <el-form-item>
                <div class="select">
                    <el-select placeholder="全部议程">
                        <el-option label="5月5日" value="5月5日" />
                        <el-option label="5月6日" value="5月6日" />
                        <el-option label="5月7日" value="5月7日" />
                        <el-option label="5月8日" value="5月8日" />
                    </el-select>
                </div>
            </el-form-item>
            <el-form-item>
                <div class="select">
                    <el-select placeholder="全部类型">
                        <el-option label="主论坛" value="主论坛" />
                        <el-option label="平行论坛" value="平行论坛" />
                        <el-option label="科普论坛" value="科普论坛" />
                        <el-option label="掌上论剑" value="掌上论剑" />
                        <el-option label="生态合作论坛" value="生态合作论坛" />
                    </el-select>
                </div>
            </el-form-item>
            </div>
        </el-form>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
    // background: url();
    // background-size: cover;
    overflow: hidden;
    background-color: blue;
    .title {
        font-size: 7vw;
        width: fit-content;
        color: white;
        margin: 10vw auto 4vw;
    }
    .el-form  {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        .el-form-item {
            margin-top: 1vw;
            .search {
                width: 80%;
                margin: 0 auto;
                border-radius: 5vw;
                overflow: hidden;
                .el-input {
                    height: 10vw;
                }
            }
            .select {
                width: 40%;
                border-radius: 4vw;

                overflow: hidden;
                .el-select {
                    height: 9vw;
                }
            }
        }

    }
}
</style>